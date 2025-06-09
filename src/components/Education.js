import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const education = [
  {
    institution: 'VNR Vignana Jyothi Institute of Engineering and Technology',
    place: 'Hyderabad',
    degree: 'B.Tech in Computer Science and Engineering (IoT)',
    years: '2022 – 2026',
    CGPA: 9.52,
  },
  {
    institution: 'Sri Chaitanya Junior College',
    place: 'Hyderabad',
    degree: 'Intermediate - MPC',
    years: '2020 – 2022',
    Percentage: '98.3%',
  },
  {
    institution: 'Sri Sai Vijetha High School',
    place: 'Tadipatri',
    degree: 'SSC',
    years: '2019 – 2020',
    Percentage: '97.2%',
  },
];

const Education = () => {
  return (
    <Box id="education" sx={{ mt: '40px',    pt: 0, backgroundColor: '#0a192f' }}>
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
         My Education
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4,textAlign: 'center',color:'lightgray' }}>
  A consistent academic path from high school to engineering, building a solid base in science and technology.
</Typography>

      <Timeline position="alternate">
        {education.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#3b82f6' }} />
              <TimelineConnector sx={{ backgroundColor: '#3b82f6' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
              <Box sx={{ ml: index % 2 === 0 ? 6: 2, mr: index % 2 !== 0 ? 10 : 2}}>
                <Paper
                  elevation={3}
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    p: 2,
                    border: '2px solid #3b82f6',
                    backgroundColor: '#0a192f',
                    borderRadius: '16px',
                    boxShadow: '0 0 10px #3b82f6',
                    animation: `${fadeInUp} 0.6s ease ${index * 0.4}s both`,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <SchoolIcon sx={{ color: 'white', fontSize: 28 }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                      {edu.institution}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: 'gray' }}>
                    {edu.place}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: 'gray' }}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'gray' }}>
                    {edu.years}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#3b82f6' }}>
                    {edu.CGPA ? `CGPA: ${edu.CGPA}` : `Percentage: ${edu.Percentage}`}
                  </Typography>
                </Paper>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
        <TimelineItem
        sx={{ display: { xs: 'none', md: 'flex' } }}>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#3b82f6' }} />
            {/* <TimelineConnector sx={{ backgroundColor: '#3b82f6' }} /> */}
          </TimelineSeparator>
          <TimelineContent />
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default Education;
