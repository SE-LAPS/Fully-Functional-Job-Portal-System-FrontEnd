import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const EducationForm = ({ resumeData, setResumeData }) => {
  const [education, setEducation] = useState({ institution: '', degree: '', year: '' });

  const handleAddEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, education],
    });
    setEducation({ institution: '', degree: '', year: '' });
  };

  const handleDeleteEducation = (index) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((_, i) => i !== index),
    });
  };

  return (
    <form>
      <TextField
        label="Institution"
        value={education.institution}
        onChange={(e) => setEducation({ ...education, institution: e.target.value })}
        fullWidth
      />
      <TextField
        label="Degree"
        value={education.degree}
        onChange={(e) => setEducation({ ...education, degree: e.target.value })}
        fullWidth
        sx={{ mt: 2 }}
      />
      <TextField
        label="Year"
        value={education.year}
        onChange={(e) => setEducation({ ...education, year: e.target.value })}
        fullWidth
        sx={{ mt: 2 }}
      />
      <Button variant="contained" onClick={handleAddEducation} sx={{ mt: 2 }} fullWidth>
        Add Education
      </Button>
      <List>
        {resumeData.education.map((edu, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" onClick={() => handleDeleteEducation(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={edu.institution} secondary={`${edu.degree}, ${edu.year}`} />
          </ListItem>
        ))}
      </List>
    </form>
  );
};

export default EducationForm;
