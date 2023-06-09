import styled from "styled-components";

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const ItemTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ItemPrice = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const MoreInfoButton = styled.button`
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #333333;
  border-radius: 5px;
  padding: 5px 10px;
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