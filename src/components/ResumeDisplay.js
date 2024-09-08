import React from 'react';

const ResumeDisplay = ({ resumeData }) => {
  return (
    <div>
      <h2>{resumeData.fullName}</h2>
      <p><strong>Email:</strong> {resumeData.email}</p>
      <p><strong>Phone:</strong> {resumeData.phone}</p>
      <p><strong>Summary:</strong> {resumeData.summary}</p>

      <h3>Skills</h3>
      <ul>
        {resumeData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Projects</h3>
      <ul>
        {resumeData.projects.map((project, index) => (
          <li key={index}>
            <strong>{project.title}</strong>: {project.description}
          </li>
        ))}
      </ul>

      <h3>Links</h3>
      <ul>
        {resumeData.links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>

      <h3>References</h3>
      <ul>
        {resumeData.references.map((reference, index) => (
          <li key={index}>
            <strong>{reference.name}</strong>: {reference.contact}
          </li>
        ))}
      </ul>

      <h3>Education</h3>
      <ul>
        {resumeData.education.map((edu, index) => (
          <li key={index}>
            <strong>{edu.institution}</strong>, {edu.degree} ({edu.year})
          </li>
        ))}
      </ul>

      <h3>Work Experience</h3>
      <ul>
        {resumeData.workExperience.map((work, index) => (
          <li key={index}>
            <strong>{work.company}</strong>, {work.role} ({work.duration})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeDisplay;
