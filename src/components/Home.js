import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { keyframes } from '@emotion/react';
import me from '../assests/me.png';

const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0); }
`;

const Home = () => {
  return (
 <Box
  id="home"
  sx={{
    minHeight: '100vh',
    backgroundColor: '#0a192f',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: { xs: 2, md: 8 },
    flexDirection: 'column',
    textAlign: 'center',
    gap: 4,
    pt: { xs: '80px', md: '60px' }, // enough to avoid header overlap
  }}
>

      {/* Left Side - Text */}
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: '100%', md: '50%' },
        }}
      >
        <Typography variant='h2'>👋 Hii!! I'm</Typography>
        <Typography
          variant="h3"
          sx={{
            ml: '10px',
            fontWeight: 'bold',
            color: '#3b82f6',
            animation: `${floatVertical} 3s ease-in-out infinite`,
            display: 'inline-block'
          }}
        >
          ABHI SREE KONDU
        </Typography>

        <Typography variant="body1" color="gray" sx={{ py: 2 }}>
          I'm a passionate Full Stack Developer and CSE (IoT) undergrad, skilled in building scalable, user-centric applications. With quick adaptability across tech stacks and real-world project experience, I thrive on turning ideas into impactful solutions.
        </Typography>

        <ScrollLink to="about" smooth duration={500}>
          <Button
            variant="contained"
            endIcon={<HiArrowNarrowRight />}
            sx={{
              background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
              mt: 2,
            }}
          >
            Download CV
          </Button>
        </ScrollLink>

        {/* Social Icons */}
        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          {[{
            icon: <FaGithub size={24} />,
            href: 'https://github.com/abhisreekondu'
          }, {
            icon: <FaCode size={24} />,
            href: 'https://leetcode.com/u/Abhi_Sree/'
          }, {
            icon: <FaLinkedin size={24} />,
            href: 'https://www.linkedin.com/in/kondu-abhi-sree/'
          }].map(({ icon, href }, index) => (
            <IconButton
              key={index}
              component="a"
              href={href}
              target="_blank"
              rel="noopener"
              sx={{
                color: 'white',
                boxShadow: '0 0 10px #3b82f6',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 0 15px #3b82f6',
                },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Box>
      </Box>

      {/* Right Side - Image */}
      <Box
        sx={{
          mt: 0,
        }}
      >
        <Box
          component="img"
          src={me}
          alt="My Profile"
          sx={{
            height: { md: 300 },
            width: 'auto',
            borderRadius: 4,
            alignSelf: 'flex-end',
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
