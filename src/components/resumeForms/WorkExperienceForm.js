import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const WorkExperienceForm = ({ resumeData, setResumeData }) => {
  const [workExperience, setWorkExperience] = useState({ company: '', role: '', duration: '' });

  const handleAddWorkExperience = () => {
    setResumeData({
      ...resumeData,
      workExperience: [...resumeData.workExperience, workExperience],
    });
    setWorkExperience({ company: '', role: '', duration: '' });
  };

  const handleDeleteWorkExperience = (index) => {
    setResumeData({
      ...resumeData,
      workExperience: resumeData.workExperience.filter((_, i) => i !== index),
    });
  };

  return (
    <form>
      <TextField
        label="Company"
        value={workExperience.company}
        onChange={(e) => setWorkExperience({ ...workExperience, company: e.target.value })}
        fullWidth
      />
      <TextField
        label="Role"
        value={workExperience.role}
        onChange={(e) => setWorkExperience({ ...workExperience, role: e.target.value })}
        fullWidth
        sx={{ mt: 2 }}
      />
      <TextField
        label="Duration"
        value={workExperience.duration}
        onChange={(e) => setWorkExperience({ ...workExperience, duration: e.target.value })}
        fullWidth
        sx={{ mt: 2 }}
      />
      <Button variant="contained" onClick={handleAddWorkExperience} sx={{ mt: 2 }} fullWidth>
        Add Work Experience
      </Button>
      <List>
        {resumeData.workExperience.map((work, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" onClick={() => handleDeleteWorkExperience(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={work.company} secondary={`${work.role}, ${work.duration}`} />
          </ListItem>
        ))}
      </List>
    </form>
  );
};

export default WorkExperienceForm;
