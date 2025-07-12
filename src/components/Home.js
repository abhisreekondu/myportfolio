import React from 'react';
import { motion } from 'framer-motion';
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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
      }}
    >
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          backgroundColor: '#0a192f',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          px: { xs: 2, md: 8 },
          pt: { xs: '80px', md: '60px' },
          gap: 4,
        }}
      >
        {/* Left Side - Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{
            flex: 1,
            maxWidth: { xs: '100%', md: '50%' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <motion.div variants={fadeIn}>
            <Typography variant='h2'>👋 Hii!! I'm</Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
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
          </motion.div>

          <motion.div variants={fadeIn}>
            <Typography variant="body1" color="gray" sx={{ py: 2 }}>
              I'm a passionate Full Stack Developer and CSE (IoT) undergrad, skilled in building scalable, user-centric applications with expertise in modern web technologies, cloud infrastructure, and IoT systems, aiming to solve real-world problems through clean architecture and efficient code.
            </Typography>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeIn}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mt: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <a href="/Abhi Sree.pdf" download style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  endIcon={<HiArrowNarrowRight />}
                  sx={{ background: 'linear-gradient(to right, #06b6d4, #3b82f6)' }}
                >
                  Download CV
                </Button>
              </a>

              <ScrollLink to="contact" smooth duration={500}>
                <Button
                  variant="contained"
                  endIcon={<HiArrowNarrowRight />}
                  sx={{ background: 'linear-gradient(to right, #06b6d4, #3b82f6)' }}
                >
                  Connect
                </Button>
              </ScrollLink>
            </Box>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={fadeIn}>
            <Box sx={{ display: 'flex', gap: 2, mt: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
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
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 15px #3b82f6' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      color: 'white',
                      boxShadow: '0 0 10px #3b82f6',
                      transition: 'box-shadow 0.3s ease-in-out',
                    }}
                  >
                    {icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
          }}
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Box
              component="img"
              src={me}
              alt="My Profile"
              sx={{
                height: { md: 300 },
                width: 'auto',
                borderRadius: 4,
              }}
            />
          </motion.div>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Home;
