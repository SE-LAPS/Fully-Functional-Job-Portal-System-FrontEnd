import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import ResumeForm from '../components/resumeForms/ResumeForm';
import SkillsForm from '../components/resumeForms/SkillsForm';
import ProjectsForm from '../components/resumeForms/ProjectsForm';
import LinksForm from '../components/resumeForms/LinksForm';
import ReferencesForm from '../components/resumeForms/ReferencesForm';
import EducationForm from '../components/resumeForms/EducationForm';
import WorkExperienceForm from '../components/resumeForms/WorkExperienceForm';
import ResumeDisplay from '../components/ResumeDisplay';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    fullName: '',
    email: '',
    phone: '',
    summary: '',
    skills: [],
    projects: [],
    links: [],
    references: [],
    education: [],
    workExperience: [],
  });

  // Mock Data
  const handleLoadMockData = () => {
    setResumeData({
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '555-123-4567',
      summary: 'A passionate software engineer with 5 years of experience in web development.',
      skills: ['JavaScript', 'React', 'Node.js', 'Express.js'],
      projects: [
        { title: 'Job Portal', description: 'A web application for job seekers and employers.' },
        { title: 'E-commerce Website', description: 'An online platform for selling products.' },
      ],
      links: ['https://github.com/johndoe', 'https://linkedin.com/in/johndoe'],
      references: [
        { name: 'Jane Smith', contact: 'jane.smith@example.com' },
        { name: 'Mike Johnson', contact: 'mike.johnson@example.com' },
      ],
      education: [
        { institution: 'ABC University', degree: 'BSc in Computer Science', year: '2020' },
      ],
      workExperience: [
        { company: 'Tech Corp', role: 'Software Engineer', duration: '2020 - Present' },
        { company: 'Web Solutions', role: 'Junior Developer', duration: '2018 - 2020' },
      ],
    });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Resume
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Skills
            </Typography>
            <SkillsForm resumeData={resumeData} setResumeData={setResumeData} />

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Projects
            </Typography>
            <ProjectsForm resumeData={resumeData} setResumeData={setResumeData} />

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Links
            </Typography>
            <LinksForm resumeData={resumeData} setResumeData={setResumeData} />

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              References
            </Typography>
            <ReferencesForm resumeData={resumeData} setResumeData={setResumeData} />

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Education
            </Typography>
            <EducationForm resumeData={resumeData} setResumeData={setResumeData} />

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Work Experience
            </Typography>
            <WorkExperienceForm resumeData={resumeData} setResumeData={setResumeData} />

            <Button variant="contained" onClick={handleLoadMockData} sx={{ mt: 4 }}>
              Load Mock Data
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Resume Preview
            </Typography>
            <ResumeDisplay resumeData={resumeData} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResumeBuilder;
