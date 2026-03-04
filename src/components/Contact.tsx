import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import { contactStyles } from '../theme/styles';
// Note: Install @mui/icons-material package: npm install @mui/icons-material
// For now, using text icons as fallback
const Email = () => <span>📧</span>;
const LinkedIn = () => <span>💼</span>;
const GitHub = () => <span>📦</span>;
const Send = () => <span>✉️</span>;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: <Email />, label: 'Email', url: 'mailto:your.email@example.com' },
    { icon: <LinkedIn />, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: <GitHub />, label: 'GitHub', url: 'https://github.com' },
  ];

  return (
    <Box id="contact" sx={contactStyles.section}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" align="center" sx={contactStyles.title}>
          Get In Touch
        </Typography>
        <Typography variant="body1" align="center" sx={contactStyles.description}>
          I'm always open to discussing new projects, creative ideas, or opportunities
          to be part of your visions.
        </Typography>
        <Box sx={contactStyles.grid}>
          <Paper elevation={3} sx={contactStyles.paper}>
            <Typography variant="h5" component="h3" sx={contactStyles.paperTitle}>
              Contact Information
            </Typography>
            <Stack spacing={3}>
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  startIcon={link.icon}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  fullWidth
                  sx={contactStyles.socialButton}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Paper>
          <Paper elevation={3} sx={contactStyles.paper}>
            <Typography variant="h5" component="h3" sx={contactStyles.paperTitle}>
              Send a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<Send />}
                  fullWidth
                  sx={contactStyles.submitButton}
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
