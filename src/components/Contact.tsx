import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import { Email, LinkedIn, GitHub, Send } from '@mui/icons-material';
import { contactStyles } from '../theme/styles';
import { useReveal } from '../hooks/useReveal';

const CONTACT_EMAIL = 'smwiley14@gmail.com';

const Contact = () => {
  const ref = useReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const socialLinks = [
    { icon: <Email />, label: 'Email', url: `mailto:${CONTACT_EMAIL}` },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sam-wiley2003/',
    },
    { icon: <GitHub />, label: 'GitHub', url: 'https://github.com/smwiley14' },
  ];

  return (
    <Box id="contact" ref={ref} className="reveal" sx={contactStyles.section}>
      <Box sx={contactStyles.inner}>
        <Typography variant="h2" component="h2" sx={contactStyles.title}>
          Get In Touch
        </Typography>
        <Typography variant="body1" sx={contactStyles.description}>
          I'm always open to discussing new opportunities, and making new connections.
        </Typography>
        <Box sx={contactStyles.grid}>
          <Paper sx={contactStyles.paper}>
            <Typography variant="h5" component="h3" sx={contactStyles.paperTitle}>
              Contact
            </Typography>
            <Stack spacing={2}>
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
          <Paper sx={contactStyles.paper}>
            <Typography variant="h5" component="h3" sx={contactStyles.paperTitle}>
              Send a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2.5}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
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
                  size="small"
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
                  size="small"
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
      </Box>
    </Box>
  );
};

export default Contact;
