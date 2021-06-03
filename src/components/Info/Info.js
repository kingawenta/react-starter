import React from 'react';
import { info } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <h2><Hero titleText={info.title} imageImg={info.adres}/>{info.text}</h2>    
  </Container>
);

export default Info;