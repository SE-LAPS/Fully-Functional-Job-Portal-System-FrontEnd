import React from 'react';
import { Avatar, Button, Container, Grid, Paper, Typography, TextField, List, ListItem } from '@mui/material';

const EmployerProfile = () => {
  return (
    <Container maxWidth='lg'>
        <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
        {/* Profile Header */}
        <Grid container alignItems="center" spacing={2}>
            <Grid item>
            <Avatar alt="Employer" src="/employer-pic.jpg" sx={{ width: 100, height: 100 }} />
            </Grid>
            <Grid item xs>
            <Typography variant="h4">Jane Smith</Typography>
            <Typography variant="subtitle1">HR Manager</Typography>
            <Typography variant="body2">Acme Corporation</Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>Edit Profile</Button>
            </Grid>
        </Grid>

        {/* Personal Information */}
        <Typography variant="h6" style={{ marginTop: '20px' }}>Personal Information</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" variant="outlined" defaultValue="jane.smith@acme.com" />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Phone Number" variant="outlined" defaultValue="+1 987 654 321" />
            </Grid>
            <Grid item xs={12}>
            <TextField fullWidth label="LinkedIn" variant="outlined" defaultValue="linkedin.com/in/janesmith" />
            </Grid>
        </Grid>

        {/* Company Information */}
        <Typography variant="h6" style={{ marginTop: '20px' }}>Company Information</Typography>
        <Grid container spacing={2}>
            <Grid item>
            <Avatar alt="Company Logo" src="/company-logo.jpg" sx={{ width: 80, height: 80 }} />
            </Grid>
            <Grid item xs>
            <Typography variant="h5">Acme Corporation</Typography>
            <Typography variant="body2">Industry: Technology</Typography>
            <Typography variant="body2">Location: San Francisco, CA</Typography>
            <Typography variant="body2">
                Acme Corporation is a leading provider of innovative solutions in the tech industry...
            </Typography>
            </Grid>
        </Grid>

        {/* Job Postings */}
        <Typography variant="h6" style={{ marginTop: '20px' }}>Active Job Postings</Typography>
        <List>
            <ListItem>Software Engineer - Posted on August 1, 2024</ListItem>
            <ListItem>Product Manager - Posted on July 15, 2024</ListItem>
        </List>

        {/* Settings */}
        <Typography variant="h6" style={{ marginTop: '20px' }}>Settings</Typography>
        <Button variant="outlined">Notification Preferences</Button>
        <Button variant="outlined" style={{ marginLeft: '10px' }}>Account Settings</Button>
        </Paper>
    </Container>
  );
};

export default EmployerProfile;
