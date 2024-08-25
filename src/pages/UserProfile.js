import React from 'react';
import { Avatar, Button, Container, Grid, Paper, Typography, TextField, List, ListItem } from '@mui/material';

function UserProfile() {
    return (
    <Container maxWidth='lg' >
        <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
        {/* Profile Header */}
        <Grid container alignItems="center" spacing={2}>
            <Grid item>
            <Avatar alt="Job Seeker" src="/profile-pic.jpg" sx={{ width: 100, height: 100 }} />
            </Grid>
            <Grid item xs>
            <Typography variant="h4">John Doe</Typography>
            <Typography variant="subtitle1">Software Engineer</Typography>
            <Typography variant="body2">New York, USA</Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>Edit Profile</Button>
            </Grid>
        </Grid>

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
    </Container>
    );
};

export default UserProfile;