import React, {useState} from 'react';
import { getCompanyLogo } from '../utils/getCompanyLogo';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
//import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, ListItemAvatar, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination'; 
import Stack from '@mui/material/Stack';

const JobList = ({ jobs = [], onJobSelect }) => {
  const [page, setPage] = useState(1); // State to manage current page
  const itemsPerPage = 5; // Define number of items per page

  const handlePageChange = (event, value) => {
    setPage(value); // Update page state when pagination changes
  };

  const paginatedJobs = jobs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="job-list-container">
      <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{ marginTop: 2 }}>
          <Pagination 
            hidePrevButton
            hideNextButton
            count={Math.ceil(jobs.length / itemsPerPage)} 
            page={page} 
            onChange={handlePageChange} 
          />
      </Stack>
      <div className="job-list">
        <div className="job-list-sidebar">
          {paginatedJobs.map(job => (
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