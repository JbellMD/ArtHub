import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, addToCart } from './CartSlice';
import { Box, Typography, Button, IconButton, Card, CardMedia, CardContent } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleContinueShopping = () => {
    navigate('/gallery');
  };

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleCheckout = () => {
    alert("Checkout functionality coming soon!");
  };

  return (
    <Box sx={{ maxWidth: 'lg', mx: 'auto', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>
      
      {cart.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" gutterBottom>
            Your cart is empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleContinueShopping}
            sx={{ mt: 2 }}
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <>
          {cart.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card sx={{ display: 'flex', mb: 2, position: 'relative' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 200, objectFit: 'cover' }}
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body1" color="text.secondary">
                      ${item.price.toFixed(2)}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <IconButton onClick={() => handleDecrement(item)} size="small">
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                    <IconButton onClick={() => handleIncrement(item)} size="small">
                      <AddIcon />
                    </IconButton>
                    <Typography sx={{ ml: 4 }}>
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                    <IconButton 
                      onClick={() => handleRemove(item.id)}
                      sx={{ ml: 'auto' }}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <Typography variant="h5" gutterBottom>
              Total: ${calculateTotalAmount()}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartItem;
