import React from 'react';
import CartItem from '../CartItem';
import { Container } from '@mui/material';

const Cart = () => {
  return (
    <Container maxWidth="lg">
      <CartItem />
    </Container>
  );
};

export default Cart;
