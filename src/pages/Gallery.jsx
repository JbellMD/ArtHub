import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Container,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../CartSlice';
import { motion } from 'framer-motion';

// Import images
import abstractHarmony from '../assets/abstract-harmony.jpg';
import urbanLandscape from '../assets/urban-landscape.jpg';
import serenityBlue from '../assets/serenity-blue.jpg';
import naturesDance from '../assets/natures-dance.jpg';
import digitalDreams from '../assets/digital-dreams.jpg';
import geometricVision from '../assets/geometric-vision.jpg';

const artworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    artist: "Elena Martinez",
    price: 599.99,
    image: abstractHarmony,
    category: "Abstract",
    description: "A vibrant exploration of color and form in acrylic on canvas."
  },
  {
    id: 2,
    title: "Urban Landscape",
    artist: "Michael Chen",
    price: 799.99,
    image: urbanLandscape,
    category: "Contemporary",
    description: "A modern interpretation of city life in oil on canvas."
  },
  {
    id: 3,
    title: "Serenity in Blue",
    artist: "Sarah Johnson",
    price: 449.99,
    image: serenityBlue,
    category: "Abstract",
    description: "A calming composition in shades of blue, mixed media on canvas."
  },
  {
    id: 4,
    title: "Nature's Dance",
    artist: "David Wilson",
    price: 899.99,
    image: naturesDance,
    category: "Impressionist",
    description: "A dynamic representation of natural forms in oil on canvas."
  },
  {
    id: 5,
    title: "Digital Dreams",
    artist: "Alex Rivera",
    price: 349.99,
    image: digitalDreams,
    category: "Digital",
    description: "A contemporary digital artwork exploring the intersection of technology and art."
  },
  {
    id: 6,
    title: "Geometric Vision",
    artist: "Lisa Park",
    price: 649.99,
    image: geometricVision,
    category: "Contemporary",
    description: "A bold geometric composition in acrylic on canvas."
  }
];

const categories = ["All", "Abstract", "Contemporary", "Impressionist", "Digital"];

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const dispatch = useDispatch();

  const filteredArtworks = artworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || artwork.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (artwork) => {
    dispatch(addToCart(artwork));
    setSnackbarOpen(true);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Art Gallery
        </Typography>
        
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search artworks"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              select
              label="Category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              variant="outlined"
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {filteredArtworks.map((artwork) => (
            <Grid item xs={12} sm={6} md={4} key={artwork.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={artwork.image}
                    alt={artwork.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {artwork.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      by {artwork.artist}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {artwork.description}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      ${artwork.price.toFixed(2)}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => handleAddToCart(artwork)}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={() => setSnackbarOpen(false)} 
          severity="success"
          variant="filled"
        >
          Artwork added to cart!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Gallery;
