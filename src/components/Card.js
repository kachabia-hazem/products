import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

// Composants stylisés
const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 18rem;
  margin: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardBody = styled.div`
  padding: 20px;
`;

const StyledCardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledCardText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
`;

// Composant fonctionnel ProductCard
function ProductCard({ title, description, price, url }) {
  return (
    <StyledCard>
      <img variant="top" src={url} alt={title} style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
      <StyledCardBody>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardText>{description}</StyledCardText>
        <StyledCardText>Price: {price}dt</StyledCardText>
        <Button variant="primary">Buy Now</Button>
      </StyledCardBody>
    </StyledCard>
  );
}

export default ProductCard;
