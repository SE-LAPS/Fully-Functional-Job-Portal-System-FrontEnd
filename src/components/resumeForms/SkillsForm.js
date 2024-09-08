import React, { useState } from 'react';
import { TextField, Button, Chip, Stack } from '@mui/material';

const SkillsForm = ({ resumeData, setResumeData }) => {
  const [skill, setSkill] = useState('');

  const handleAddSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, skill],
    });
    setSkill('');
  };

  const handleDeleteSkill = (skillToDelete) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((s) => s !== skillToDelete),
    });
  };

  return (
    <form>
      <TextField
        label="Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleAddSkill} sx={{ mt: 2 }} fullWidth>
        Add Skill
      </Button>
      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        {resumeData.skills.map((skill, index) => (
          <Chip key={index} label={skill} onDelete={() => handleDeleteSkill(skill)} />
        ))}
      </Stack>
    </form>
  );
};

export default SkillsForm;
