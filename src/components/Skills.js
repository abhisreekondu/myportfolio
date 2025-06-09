import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { FaJs, FaJava, FaReact, FaNode, FaGitAlt, FaCuttlefish,FaChartBar,FaCode } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPostman, SiArduino } from 'react-icons/si';
import { DiPython } from 'react-icons/di';

const skills = [
  { icon: <FaJs size={30} color="#f7df1e" />, name: 'JavaScript' },
  { icon: <FaJava size={30} color="#007396" />, name: 'Java' },
   { icon: <FaCuttlefish size={30} color="#00599C" />, name: 'C++' },
  { icon: <DiPython size={30} color="#3776AB" />, name: 'Python' },
  { icon: <FaReact size={30} color="#61DAFB" />, name: 'React' },


  { icon: <FaNode size={30} color="#339933" />, name: 'Node.js' },
  { icon: <SiMongodb size={30} color="#47A248" />, name: 'MongoDB' },
  { icon: <SiMysql size={30} color="#00758F" />, name: 'MySQL' },
  { icon: <FaGitAlt size={30} color="#F05032" />, name: 'Git' },
  { icon: <SiPostman size={30} color="#FF6C37" />, name: 'Insomnia' },
  { icon: <FaGitAlt size={30} color="#F05032" />, name: 'GitHub' },
  { icon: <FaCode size={30} color="#FFCC00" />, name: 'VS Code' },
    { icon: <SiArduino size={30} color="#00979D" />, name: 'Arduino IDE' },
    { icon: <FaReact size={30} color="#4DB33D" />, name: 'MERN Stack' },
  { icon: <FaChartBar size={30} color="#F2C811" />, name: 'Power BI' },
];

const Skills = () => (
  <Box id="skills" sx={{ backgroundColor: '#0a192f', color: 'white', py: 8, px: {xs: 2, sm: 4 }}}>
    
    
    <Typography
  variant="h4"
  gutterBottom
  sx={{
    fontWeight: 'bold',
     textAlign:'center' ,
    background: 'linear-gradient(90deg, rgb(125, 35, 200) 0%, rgb(91, 33, 236) 55%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
   SKILLS
</Typography><Typography variant="subtitle1" sx={{ mb: 4,textAlign: 'center',color:'lightgray' }}>
  A diverse and evolving technical skill set developed through hands-on projects and continuous learning across full-stack development and tools.
</Typography>

    <Grid container spacing={6} justifyContent="center">
      {skills.map((skill, index) => (
        <Grid item xs={6} sm={3} md={2} key={index}>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
              height: 130,
            width: 130,
            textAlign: 'center',
            border: '1px solid #3b82f6',
            borderRadius: '12px',
            p: 2,
            boxShadow: '0 0 8px #3b82f6',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 0 15px #3b82f6'
            }
          }}>
            {skill.icon}
            <Typography variant="subtitle1" sx={{ color: 'white', mt: 1 }}>{skill.name}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Skills;
