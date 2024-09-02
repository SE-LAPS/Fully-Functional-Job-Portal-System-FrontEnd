import React from 'react';
import { Avatar, Button, Container, Grid, Paper, Typography, Divider, List, ListItem, Stack,Box} from '@mui/material';

function EmployerProfile() {
    return (
        <Container maxWidth='lg' >
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Paper elevation={3} style={{ padding: '20px', margin: '20px', flex: '1' }}>
                        <Stack spacing={2}>
                            <Avatar alt="Jane Smith" src="/employer-pic.jpg" sx={{ width: 100, height: 100 }} />
                            <Typography variant="h4">Jane Smith</Typography>
                            <Typography variant="subtitle1">HR Manager</Typography>
                            <Typography variant="body2">Acme Corporation</Typography>
                        </Stack>
                    </Paper>
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" >Edit Profile</Button>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Paper elevation={3} sx={{background: 'linear-gradient(to right, #ffffff, #007bff)',}} style={{ padding: '20px', margin: '20px', flex: '3' }}>
                        <br />
                        {/* Personal Information */}
                        <Divider textAlign="left">
                            <Typography variant="overline" style={{ marginTop: '20px', color:'grey'}}>Personal Information</Typography>
                        </Divider>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box display="flex" alignItems="center">
                                    <Typography variant="subtitle1">Email:&nbsp;</Typography>
                                    <Typography variant="body1">jane.smith@acme.com</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box display="flex" alignItems="center">
                                    <Typography variant="subtitle1">Phone Number:&nbsp;</Typography>
                                    <Typography variant="body1">+1 987 654 321</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" alignItems="center">
                                    <Typography variant="subtitle1">LinkedIn:&nbsp;</Typography>
                                    <Typography variant="body1">linkedin.com/in/janesmith</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        {/* Company Information */}
                        <Divider textAlign="left">
                            <Typography variant="overline" style={{ marginTop: '20px', color:'grey'}}>Company Information</Typography>
                        </Divider>
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
                        <Divider textAlign="left">
                            <Typography variant="overline" style={{ marginTop: '20px', color:'grey'}}>Active Job Postings</Typography>
                        </Divider>
                        <List>
                            <ListItem>Software Engineer - Posted on August 1, 2024</ListItem>
                            <ListItem>Product Manager - Posted on July 15, 2024</ListItem>
                        </List>
                        {/* Settings */}
                        <Divider textAlign="left">
                            <Typography variant="overline" style={{ marginTop: '20px', color:'grey'}}>Settings</Typography>
                        </Divider>
                        <Button variant="outlined">Notification Preferences</Button>
                        <Button variant="outlined" style={{ marginLeft: '10px' }}>Account Settings</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container> 
    );
};

export default EmployerProfile;