import React from 'react';
import { Avatar, Button, Container, Grid, Paper, Typography, Divider, List, ListItem, Stack,Box} from '@mui/material';

function AdminProfile() {
    return (
        <Container maxWidth='lg' >
            <Grid container spacing={1}>
              <Grid item xs={4}>
                  <Paper elevation={3} style={{ padding: '20px', margin: '20px', flex: '1' }}>
                      <Stack spacing={2}>
                          <Avatar alt="Admin" src="/admin-pic.jpg" sx={{ width: 100, height: 100 }} />
                          <Typography variant="h4">Admin Name</Typography>
                          <Typography variant="subtitle1">System Administrator</Typography>
                      </Stack>
                      <Box display="flex" justifyContent="center">
                          <Button variant="contained" >Edit Profile</Button>
                      </Box>
                  </Paper>
              </Grid>
              <Grid item xs={8}>
                  <Paper elevation={3} sx={{background: 'linear-gradient(to right, #ffffff, #007bff)',}} style={{ padding: '20px', margin: '20px', flex: '3' }}>

                      {/* Personal Information */}
                      <Divider textAlign="left">
                          <Typography variant="overline" style={{ marginTop: '20px', color:'grey'}}>Personal Information</Typography>
                      </Divider>
                      <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                              <Box display="flex" alignItems="center">
                                  <Typography variant="subtitle1">Email:&nbsp;</Typography>
                                  <Typography variant="body1">admin@example.com</Typography>
                              </Box>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                              <Box display="flex" alignItems="center">
                                  <Typography variant="subtitle1">Phone Number:&nbsp;</Typography>
                                  <Typography variant="body1">+1 123 456 789</Typography>
                              </Box>
                          </Grid>
                      </Grid>
                    {/* Admin Tools */}
                    <Divider textAlign="left">
                        <Typography variant="overline" style={{ marginTop: '20px', color:'grey'}}>Admin Tools</Typography>
                    </Divider>
                    <List>

                        <ListItem>Manage Users ~Under Development~</ListItem> 
                        <ListItem>System Settings ~Under Development~</ListItem>
                        <ListItem>Security Logs ~Under Development~</ListItem>
                    </List>
                    {/* Settings */}
                    <Divider textAlign="left">
                        <Typography variant="overline" style={{ marginTop: '20px', color:'grey'}}>Settings</Typography>
                    </Divider>
                    <Button variant="outlined">Notification Preferences</Button>
                    <Button variant="outlined" style={{ marginLeft: '10px' }}>Account Security</Button>
                  </Paper>
              </Grid>
            </Grid>
        </Container>
    );
};

export default AdminProfile;
