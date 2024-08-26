import React from 'react';
import { Avatar, Button, Container, Grid, Paper, Typography, TextField, List, ListItem, Stack,} from '@mui/material';

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
            </Grid>
            <Grid item xs={8}>
                <Paper elevation={3} style={{ padding: '20px', margin: '20px', flex: '3' }}>
                    <Button variant="contained" style={{ float: 'right' }}>Edit Profile</Button>
                    {/* Personal Information */}
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Personal Information</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Email" variant="outlined" defaultValue="john.doe@example.com" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Phone Number" variant="outlined" defaultValue="+1 234 567 890" />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField fullWidth label="Address" variant="outlined" defaultValue="123 Main St, New York, NY" />
                        </Grid>
                    </Grid>

                    {/* Professional Summary */}
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Professional Summary</Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        defaultValue="Experienced software engineer with a passion for developing innovative programs..."
                    />

                    {/* Education */}
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Education</Typography>
                    <List>
                        <ListItem>BS in Computer Science - MIT (2016 - 2020)</ListItem>
                        <ListItem>MS in Software Engineering - Stanford University (2020 - 2022)</ListItem>
                    </List>

                    {/* Experience */}
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Experience</Typography>
                    <List>
                        <ListItem>Software Engineer - Google (2022 - Present)</ListItem>
                        <ListItem>Intern - Microsoft (2021 - 2022)</ListItem>
                    </List>

                    {/* Skills */}
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Skills</Typography>
                    <List>
                        <ListItem>JavaScript</ListItem>
                        <ListItem>React</ListItem>
                        <ListItem>Node.js</ListItem>
                    </List>

                    {/* Resume Upload */}
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Resume</Typography>
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