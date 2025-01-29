import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import artGalleryImg from '../assets/art-gallery.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginTop: '-64px',
        paddingTop: '64px',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${artGalleryImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.7)',
          zIndex: 0,
        }}
      />

      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container 
        maxWidth="md" 
        sx={{ 
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          py: 8,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              mb: 4,
              fontSize: { xs: '2.5rem', md: '3.75rem' },
            }}
          >
            Welcome to ArtHub
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              mb: 6,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.5rem' },
            }}
          >
            Discover our curated collection of stunning artworks from talented artists worldwide.
            From contemporary masterpieces to timeless classics, find the perfect piece to elevate
            your space and inspire your soul.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/gallery')}
            sx={{
              fontSize: '1.2rem',
              py: 1.5,
              px: 4,
              borderRadius: '30px',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
                transform: 'scale(1.05)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Explore Gallery
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
