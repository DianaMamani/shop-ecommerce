import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
`;

export const AddCartButton = styled.button`
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #333333;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  &:hover {
    background-color: #333333;
    color: #ffffff;
    border-color: #ffffff;
  }
`;