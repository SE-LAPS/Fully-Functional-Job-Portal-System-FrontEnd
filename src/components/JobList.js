import React, {useState} from 'react';
import { getCompanyLogo } from '../utils/getCompanyLogo';

//Material UI components
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, ListItemAvatar, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination'; 
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const JobList = ({ jobs = [], onJobSelect }) => {
  const [page, setPage] = useState(1); // State to manage current page
  const itemsPerPage = 10; // Define number of items per page

  const handlePageChange = (event, value) => {
    setPage(value); // Update page state when pagination changes
  };

  const paginatedJobs = jobs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="job-list-container">
      
      <div className="job-list">
        <Box sx={{ justifyContent: 'center', display: 'flex',
        flexWrap: 'wrap', maxWidth:320, height: 690, overflowY: 'scroll'
        }}>
          <Pagination 
            hidePrevButton
            hideNextButton
            count={Math.ceil(jobs.length / itemsPerPage)} 
            page={page} 
            onChange={handlePageChange} 
          />
          {paginatedJobs.map(job => (
            <List key={job.id} sx={{ width: '90%', color: 'background.paper' }}>
              <Paper elevation={3}>
                <ListItemButton onClick={() => onJobSelect(job)}>
                  <ListItemAvatar>
                    <Avatar alt={job.company} src={getCompanyLogo(job.company)} />
                  </ListItemAvatar>
                  <ListItemText 
                    primary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body1"
                          color="text.primary"
                        >
                          {job.title}
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {job.jobType}
                        </Typography>
                        <br />
                        {job.company} - {job.location}  
                      </React.Fragment>
                    }
                  />
                </ListItemButton>
              </Paper>
            </List>
          ))}
          <Pagination 
            hidePrevButton
            hideNextButton
            count={Math.ceil(jobs.length / itemsPerPage)} 
            page={page} 
            onChange={handlePageChange} 
          />
        </Box>

        
      </div>
    </div>
  );
};

export default JobList;