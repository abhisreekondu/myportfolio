import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';



 const Contact = () => (
  <Box id="contact" sx={{ backgroundColor: '#0a192f', color: 'white', py: 8, px: 4 }}>
    <Typography variant="h4" align="center" gutterBottom sx={{ color: '#3b82f6' }}>
      Contact Me
    </Typography>

    {/* Contact Info */}
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
      href="konduabhisree@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
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
    <Box component="form" action="https://formsubmit.co/abhikondu597@gmail.com" method="POST" sx={{ maxWidth: 500, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <input type="text" name="name" placeholder="Your Name" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #3b82f6', backgroundColor: '#0a192f', color: 'white' }} />
      <input type="email" name="email" placeholder="Your Email" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #3b82f6', backgroundColor: '#0a192f', color: 'white' }} />
      <textarea name="message" placeholder="Your Message" rows="5" required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #3b82f6', backgroundColor: '#0a192f', color: 'white' }}></textarea>
      <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#3b82f6', color: 'white', border: 'none', cursor: 'pointer' }}>
        Send
      </button>
    </Box>
  </Box>
);
export default Contact