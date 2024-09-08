import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ProjectsForm = ({ resumeData, setResumeData }) => {
  const [project, setProject] = useState({ title: '', description: '' });

  const handleAddProject = () => {
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, project],
    });
    setProject({ title: '', description: '' });
  };

  const handleDeleteProject = (index) => {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.filter((_, i) => i !== index),
    });
  };

  return (
    <form>
      <TextField
        label="Project Title"
        name="title"
        value={project.title}
        onChange={(e) => setProject({ ...project, title: e.target.value })}
        fullWidth
      />
      <TextField
        label="Project Description"
        name="description"
        value={project.description}
        onChange={(e) => setProject({ ...project, description: e.target.value })}
        fullWidth
        multiline
        rows={3}
        sx={{ mt: 2 }}
      />
      <Button variant="contained" onClick={handleAddProject} sx={{ mt: 2 }} fullWidth>
        Add Project
      </Button>
      <List>
        {resumeData.projects.map((proj, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" onClick={() => handleDeleteProject(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={proj.title} secondary={proj.description} />
          </ListItem>
        ))}
      </List>
    </form>
  );
};

export default ProjectsForm;
