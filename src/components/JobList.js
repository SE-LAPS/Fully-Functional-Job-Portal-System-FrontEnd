import React from 'react';
import { getCompanyLogo } from '../utils/getCompanyLogo';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Avatar, ListItemAvatar, Typography } from '@mui/material';

const JobList = ({ jobs = [], onJobSelect }) => {

  return (
    <div className="job-list-container">
      <h1 className="title">Jobs Found</h1>
      <div className="job-list">
        <div className="job-list-sidebar">
          {jobs.map(job => (
            <List key={job.id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItemButton onClick={() => onJobSelect(job)}>
                <ListItemAvatar>
                  <Avatar alt={job.company} src={getCompanyLogo(job.company)} />
                </ListItemAvatar>
                <ListItemText 
                  primary={job.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {job.company} - {job.location}  
                      </Typography>
                      {job.category} - {job.jobType}
                    </React.Fragment>
                  }
                />
              </ListItemButton>
            </List>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;