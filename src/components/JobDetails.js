import React, {useState} from 'react';
import {jobDetails} from '../api/jobs_api';
import { getCompanyLogo } from '../utils/getCompanyLogo';
import companyImg from '../assets/company1.jpg';

//Material UI components
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const JobDetails = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!job) {
    return <p>No job details available. Please select a job from the list.</p>;
  }
  const jobID = jobDetails.find(j => j.id === job.id);

  return (
    <Card sx={{ maxWidth: 780, marginBottom: 5 }}>
      <CardHeader
        avatar={
          <Avatar alt={job.company} src={getCompanyLogo(job.company)} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={job.company}
        subheader="September 14, 2016"

      />
      <CardMedia
        component="img"
        height="194"
        image={companyImg}
        alt="Company Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {jobID.description}
        </Typography>
        <Typography variant='h6' color="text.secondary">Responsibility:</Typography>
          <Typography variant="body2" color="text.secondary">
            {jobID.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </Typography>
          <Typography variant='h6' color="text.secondary">Qualifications:</Typography>
          <Typography variant="body2" color="text.secondary">
            {jobID.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </Typography>
      </CardContent>
      <Button variant="contained" href="/apply" sx={{margin: 2}}>Apply Now</Button>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant='h6' color="text.secondary">Our Values:</Typography>
          <Typography variant="body2" color="text.secondary">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography variant='h6' color="text.secondary">Job Benefits:</Typography>
          <Typography variant="body2" color="text.secondary">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

  );
};

export default JobDetails;
