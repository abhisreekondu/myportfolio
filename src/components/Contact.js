import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../utils/emailConfig';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(emailConfig.userId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      // Add recipient email
      to_email: 'konduabhisreekondu@gmail.com',
      // Add reply-to email (sender's email)
      reply_to: form.email.value,
      // Add subject
      subject: 'New Portfolio Contact Form Submission'
    };

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.userId) {
      setError('Email service is not properly configured. Please contact the administrator.');
      setLoading(false);
      return;
    }

    emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      formData,
      emailConfig.userId
    )
    .then((result) => {
      setSuccess(true);
      form.reset();
    })
    .catch((error) => {
      // Get more specific error message
      const errorMessage = error.text || error.message || 'Failed to send message';
      setError(`Error: ${errorMessage}. Please try again later.`);
      console.error('EmailJS Error:', error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <Box id="contact" sx={{ backgroundColor: '#0a192f', color: 'white', py: 8, px: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          background: 'linear-gradient(90deg, rgb(125, 35, 200) 0%, rgb(91, 33, 236) 55%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Contact Me
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, textAlign: 'center', color: 'lightgray' }}>
        Let’s connect — open to collaborations, internships, and tech-driven opportunities.
      </Typography>

      {/* Contact Info */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 4,
          mb: 4,
          textAlign: 'center'
        }}
      >
        <Typography>
          <FaEnvelope style={{ color: 'white', marginRight: 8 }} />
          <a
            href="mailto:konduabhisreekondu@gmail.com"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            konduabhisreekondu@gmail.com
          </a>
        </Typography>
        <Typography>
          <FaGithub style={{ color: 'white', marginRight: 8 }} />
          <a
            href="https://github.com/abhisreekondu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            github.com/abhisreekondu
          </a>
        </Typography>
        <Typography>
          <FaMapMarkerAlt style={{ color: 'white', marginRight: 8 }} />
          Hyderabad, India
        </Typography>
      </Box>

      {/* Contact Form */}
      <Box component="form" onSubmit={sendEmail} sx={{ maxWidth: 500, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <input type="text" name="name" placeholder="Your Name" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #3b82f6', backgroundColor: '#0a192f', color: 'white' }} />
        <input type="email" name="email" placeholder="Your Email" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #3b82f6', backgroundColor: '#0a192f', color: 'white' }} />
        <textarea name="message" placeholder="Your Message" rows="5" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #3b82f6', backgroundColor: '#0a192f', color: 'white' }}></textarea>
        <button type="submit" disabled={loading} style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#3b82f6', color: 'white', border: 'none', cursor: 'pointer' }}>
          {loading ? 'Sending...' : 'Send'}
        </button>
        {success && (
          <Typography variant="body2" sx={{ color: 'green', mt: 2 }}>
            Message sent successfully!
          </Typography>
        )}
        {error && (
          <Typography variant="body2" sx={{ color: 'red', mt: 2 }}>
            {error}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Contact;