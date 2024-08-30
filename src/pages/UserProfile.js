import React from 'react';
import { Avatar, Button, Container, Grid, Paper, Typography, Divider, List, ListItem, Stack,Box} from '@mui/material';
function UserProfile() {
    return (
    <Container maxWidth='lg' >
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <Paper elevation={3} style={{ padding: '20px', margin: '20px', flex: '1' }}>
                    <Stack spacing={2}>
                        <Avatar alt="Prasitha Samaraarachchi" src="/profile-pic.jpg" sx={{ width: 100, height: 100 }} />
                        <Typography variant="h4">Prasitha Samaraarachchi</Typography>
                        <Typography variant="subtitle1">Software Engineer</Typography>
                        <Typography variant="body2">New York, USA</Typography>
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
                                <Typography variant="body1">john.doe@example.com</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box display="flex" alignItems="center">
                                <Typography variant="subtitle1">Phone:&nbsp;</Typography>
                                <Typography variant="body1">+1 123 456 7890</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box display="flex" alignItems="center">
                                <Typography variant="subtitle1">Address:&nbsp;</Typography>
                                <Typography variant="body1">123 Main Street, New York, USA</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Professional Summary */}
                    <Divider textAlign="left">
                        <Typography variant="overline" style={{ marginTop: '20px', color:'grey'}}>Professional Summary</Typography>
                    </Divider>
                        <Typography variant="body1">
                            A highly skilled software engineer with over 5 years of experience in developing web applications. Proficient in JavaScript, React, and Node.js. Strong problem-solving skills and a passion for learning new technologies.
                        </Typography>
                    {/* Education */}
                    <Divider textAlign="left">
                        <Typography variant="overline" style={{ marginTop: '20px', color:'grey'}}>Education</Typography>
                    </Divider>
                    <List>
                        <ListItem>BS in Computer Science - MIT (2016 - 2020)</ListItem>
                        <ListItem>MS in Software Engineering - Stanford University (2020 - 2022)</ListItem>
                    </List>

                    {/* Experience */}
                    <Divider textAlign="left">
                        <Typography variant="overline" style={{ marginTop: '20px', color:'grey'}}>Experience</Typography>
                    </Divider>
                    <List>
                        <ListItem>Software Engineer - Google (2022 - Present)</ListItem>
                        <ListItem>Intern - Microsoft (2021 - 2022)</ListItem>
                    </List>

                    {/* Skills */}
                    <Divider textAlign="left">
                        <Typography variant="overline" style={{ marginTop: '20px', color:'grey'}}>Skills</Typography>
                    </Divider>
                    <List>
                        <ListItem>JavaScript</ListItem>
                        <ListItem>React</ListItem>
                        <ListItem>Node.js</ListItem>
                    </List>

                    {/* Resume Upload */}
                    <Divider textAlign="left">
                        <Typography variant="overline" style={{ marginTop: '20px', color:'grey'}}>Resume</Typography>
                    </Divider>
                    <Button variant="outlined" component="label">
                        Upload Resume
                        <input type="file" hidden />
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    </Container>
    );
};

export default UserProfile;