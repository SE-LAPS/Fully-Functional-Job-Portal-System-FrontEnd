import React from 'react';
import { Avatar, Button, Grid, Paper, Typography, TextField, List, ListItem } from '@mui/material';

const AdminProfile = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
      {/* Profile Header */}
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar alt="Admin" src="/admin-pic.jpg" sx={{ width: 100, height: 100 }} />
        </Grid>
        <Grid item xs>
          <Typography variant="h4">Admin Name</Typography>
          <Typography variant="subtitle1">System Administrator</Typography>
          <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>Edit Profile</Button>
        </Grid>
      </Grid>

      {/* Personal Information */}
      <Typography variant="h6" style={{ marginTop: '20px' }}>Personal Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Email" variant="outlined" defaultValue="admin@example.com" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Phone Number" variant="outlined" defaultValue="+1 123 456 789" />
        </Grid>
      </Grid>

      {/* Admin Tools */}
      <Typography variant="h6" style={{ marginTop: '20px' }}>Admin Tools</Typography>
      <List>
        <ListItem>Manage Users ~Under Development~</ListItem>
        <ListItem>System Settings ~Under Development~</ListItem>
        <ListItem>Security Logs ~Under Development~</ListItem>
      </List>

      {/* Settings */}
      <Typography variant="h6" style={{ marginTop: '20px' }}>Settings</Typography>
      <Button variant="outlined">Notification Preferences</Button>
      <Button variant="outlined" style={{ marginLeft: '10px' }}>Account Security</Button>
    </Paper>
  );
};

export default AdminProfile;
