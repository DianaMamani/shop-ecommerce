import React, { useContext, useState } from 'react';
import { db } from '../../firebase/config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore/lite';
import { CartContext } from '../../contexts/CartContext';
import { FormContainer, FormField, Input, Label, SubmitButton, ErrorMessage } from './styles';
import { useNavigate } from 'react-router-dom'

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateTelephone = (telephone) => {
  const regex = /^\d{10}$/;
  return regex.test(telephone);
};

const validateForm = (email, confirmEmail, number) => {
  return (
    validateEmail(email) &&
    email === confirmEmail &&
    validateTelephone(number)
  );
};

export const CheckoutForm = () => {
  const {cart, total, empty} = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setFormValid(validateForm(event.target.value, confirmEmail,number));
  };

  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
    setFormValid(validateForm(email, event.target.value, number));
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
    setFormValid(validateForm(email, confirmEmail, event.target.value));
  };

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
        empty();
        navigate(`/orders/${response.id}`);
      });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Nombre Completo:</Label>
          <Input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </FormField>        
        <FormField>
          <Label htmlFor="email">Confirmacion de email:</Label>
          <Input
            type="email"
            value={confirmEmail}
            onChange={handleConfirmEmailChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="number">Numero:</Label>
          <Input
            type="tel"
            value={number}
            onChange={handleNumberChange}
            required
          />
        </FormField>
        <SubmitButton type="submit" disabled={!formValid}>Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};
