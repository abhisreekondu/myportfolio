import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Chip, Button, Stack } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import taxeaseImg from '../assests/taxease.png';
import reviewpulseImg from '../assests/reviewpulse.png';
import falldetectionImg from '../assests/falldetection.png';
const projects = [
  {
    title: 'TaxEase',
    tech: ['React', 'Material UI', 'Node', 'Express'],
    description: `A fully responsive tax calculation platform for salaried individuals with a modern UI and New Tax Regime logic. Generates salary reports like Salary Table, Annexure II, and Form 16. Backend handles tax computation and routing.`,
    image: taxeaseImg,
    github: 'https://github.com/abhisreekondu/incometax',
   
  },
  {
    title: 'Review Pulse',
    tech: ['NLTK', 'Scikit-learn', 'WordCloud','Decision Tree','Streamlit'],
    description: `A sentiment analysis tool for Flipkart product reviews using TF-IDF, lemmatization, and machine learning classifiers (SVM, Random Forest, etc.). Offers data visualization and accurate sentiment classification.`,
    image: reviewpulseImg,
    github:'https://github.com/abhisreekondu/sentiment-analysis',
   
  },
  {
    title: 'Smart Fall Detection',
    tech: ['ESP32', 'MPU6050', 'Arduino', 'Blynk'],
    description: `A wearable real-time fall detection system using motion sensors and Arduino. Sends alerts via SMS, email, and alarm using Blynk integration.`,
    image:falldetectionImg,
    github:'https://github.com/abhisreekondu/smart_fall_detection/tree/main',
   
  }
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ backgroundColor: '#0a192f', color: 'white', py: 8, px: 4 }}>
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
        Projects
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, textAlign: 'center', color: 'lightgray' }}>
        A portfolio of impactful, real-world projects showcasing problem-solving, backend logic, and UI/UX proficiency.
      </Typography>

      <Stack spacing={4} alignItems="center" justifyContent="center" textAlign="center">
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              width: '100%',
              maxWidth: 800,
              mx: 'auto',
              px: { xs: 2, sm: 4 }, // Responsive horizontal padding
            }}
          >
            <Card
              sx={{
                width: '100%',
                backgroundColor: '#111827',
                color: 'white',
                borderRadius: 3,
                boxShadow: '0 0 20px rgba(59,130,246,0.4)',
              }}
            >
              {project.image && (
               <CardMedia
  component="img"
  image={project.image}
  alt={project.title}
  sx={{
    height: { xs: 180, sm: 250 },      // Responsive height
    width: '100%',
    objectFit: 'contain',              // Ensures full image fits inside without cropping
    backgroundColor: '#1f2937',        // Optional: gives contrast if image has transparent parts
    p: 2,                              // Optional padding inside image box
  }}
/>

              )}
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ color: '#c084fc', fontWeight: 'bold' }}>
                  {project.title}
                </Typography>
                <Typography variant="body1" sx={{ my: 2, color: 'gray' }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2 }}>
                  {project.tech.map((tech, i) => (
                    <Chip key={i} label={tech} variant="outlined" sx={{ color: 'white', borderColor: '#3b82f6' }} />
                  ))}
                </Stack>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<FaGithub />}
                    href={project.github}
                    target="_blank"
                    sx={{ color: 'white', borderColor: 'gray' }}
                  >
                    Git
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
