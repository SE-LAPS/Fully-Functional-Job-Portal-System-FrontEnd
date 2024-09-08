import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const LinksForm = ({ resumeData, setResumeData }) => {
  const [link, setLink] = useState('');

  const handleAddLink = () => {
    setResumeData({
      ...resumeData,
      links: [...resumeData.links, link],
    });
    setLink('');
  };

  const handleDeleteLink = (index) => {
    setResumeData({
      ...resumeData,
      links: resumeData.links.filter((_, i) => i !== index),
    });
  };

  return (
    <form>
      <TextField
        label="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleAddLink} sx={{ mt: 2 }} fullWidth>
        Add Link
      </Button>
      <List>
        {resumeData.links.map((link, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" onClick={() => handleDeleteLink(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={link} />
          </ListItem>
        ))}
      </List>
    </form>
  );
};

export default LinksForm;
