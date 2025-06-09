import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import me from '../assests/me.png';
import name from "../assests/name.png";
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { keyframes } from '@emotion/react';

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
        height: '100vh',
        backgroundColor: '#0a192f',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 2, md: 8 },
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
      }}
    >
      {/* Left Side - Text */}
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: '100%', md: '50%' },
        }}
      >
        <Typography variant='h2'>
          👋Hii!! I'm
        </Typography>
        <Box
          component="img"
          src={name}
          alt="Intro GIF"
          sx={{
            ml: '10px',
            height: { xs: 60, md: 100 },
            width: 'auto',
            animation: `${floatVertical} 3s ease-in-out infinite`,
          }}
        />

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
          <IconButton
            component="a"
            href="https://github.com/abhisreekondu"
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
            <FaGithub size={24} />
          </IconButton>
          <IconButton
            component="a"
            href="https://leetcode.com/u/Abhi_Sree/"
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
            <FaCode size={24} />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/kondu-abhi-sree/"
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
            <FaLinkedin size={24} />
          </IconButton>
        </Box>
      </Box>

      {/* Right Side - Image (only on md and larger screens) */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          mt: { md: -6 },
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
