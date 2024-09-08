import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ReferencesForm = ({ resumeData, setResumeData }) => {
  const [reference, setReference] = useState({ name: '', contact: '' });

  const handleAddReference = () => {
    setResumeData({
      ...resumeData,
      references: [...resumeData.references, reference],
    });
    setReference({ name: '', contact: '' });
  };

  const handleDeleteReference = (index) => {
    setResumeData({
      ...resumeData,
      references: resumeData.references.filter((_, i) => i !== index),
    });
  };

  return (
    <form>
      <TextField
        label="Name"
        value={reference.name}
        onChange={(e) => setReference({ ...reference, name: e.target.value })}
        fullWidth
      />
      <TextField
        label="Contact"
        value={reference.contact}
        onChange={(e) => setReference({ ...reference, contact: e.target.value })}
        fullWidth
        sx={{ mt: 2 }}
      />
      <Button variant="contained" onClick={handleAddReference} sx={{ mt: 2 }} fullWidth>
        Add Reference
      </Button>
      <List>
        {resumeData.references.map((ref, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" onClick={() => handleDeleteReference(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={ref.name} secondary={ref.contact} />
          </ListItem>
        ))}
      </List>
    </form>
  );
};

export default ReferencesForm;
