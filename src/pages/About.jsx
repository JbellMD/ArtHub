import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Palette as PaletteIcon,
  LocalShipping as ShippingIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
    title: 'Curated Collection',
    description: 'Our team of art experts carefully selects each piece to ensure the highest quality and artistic value.',
  },
  {
    icon: <ShippingIcon sx={{ fontSize: 40 }} />,
    title: 'Secure Shipping',
    description: 'We partner with specialized art shipping services to ensure your artwork arrives safely.',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Authentication',
    description: 'Each artwork comes with a certificate of authenticity and detailed provenance information.',
  },
];

const team = [
  {
    name: 'Sarah Chen',
    role: 'Lead Curator - Art',
    image: '/images/curator1.jpg',
    bio: 'With over 15 years of experience in the art world, Sarah brings her expertise in contemporary and modern art.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Art Director - Museums',
    image: '/images/curator2.jpg',
    bio: 'Marcus has curated exhibitions for major galleries worldwide and specializes in emerging artists.',
  },
  {
    name: 'Emily Watson',
    role: 'Client Relations',
    image: '/images/curator3.jpg',
    bio: 'Emily ensures that every client receives personalized attention and expert guidance in their art journey.',
  },
];

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          About ArtHub
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ mb: 8 }}>
          Connecting art lovers with exceptional pieces that inspire and transform spaces.
        </Typography>
      </motion.div>

      {/* Features */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid item xs={12} md={4} key={member.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar
                      src={member.image}
                      sx={{ 
                        width: 120, 
                        height: 120, 
                        mx: 'auto',
                        mb: 2,
                        border: 3,
                        borderColor: 'primary.main'
                      }}
                    />
                    <Typography gutterBottom variant="h6" component="h3">
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {member.bio}
                    </Typography>
                    <Box>
                      <IconButton color="primary" aria-label="facebook">
                        <FacebookIcon />
                      </IconButton>
                      <IconButton color="primary" aria-label="twitter">
                        <TwitterIcon />
                      </IconButton>
                      <IconButton color="primary" aria-label="instagram">
                        <InstagramIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" paragraph>
            Have questions about our artwork or need assistance? We're here to help!
          </Typography>
          <Typography variant="h6" color="primary">
            contact@arthub.com
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default About;
