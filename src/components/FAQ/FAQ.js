import React from 'react';
import { faq } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <h2><Hero titleText={faq.title} imageImg={faq.adres}/>{faq.text}</h2>    
  </Container>
);

export default FAQ;