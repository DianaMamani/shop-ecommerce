import React, { useContext, useState } from 'react';
import { db } from '../../firebase/config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore/lite';
import { CartContext } from '../../contexts/CartContext';
import { FormContainer, FormTitle, FormField, Button, Input, Label } from './styles';

export const CheckoutForm = () => {
  const {cart, total, empty} = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [orderId, serOrderId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const orden = {
      customer: { name: name, mail: email, telephone: number },
      cart: cart,
      total: total(),
      date: serverTimestamp(),
    }

    const orders = collection(db, "orders")
    const doc = addDoc(orders, orden)

    doc
      .then(response => {
        console.log(response.id)
        empty();
      });
  };

  return (
    <FormContainer>
      <FormTitle>My Form</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="number">Number:</Label>
          <Input
            type="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </FormField>
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};
