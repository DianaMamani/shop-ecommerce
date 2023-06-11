import styled from "styled-components";

export const CartContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CartTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;
 
export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ItemPrice = styled.p`
  font-size: 1rem;
  color: #666666;
`;

export const QuantityInput = styled.input`
  width: 40px;
  padding: 5px;
  margin-right: 10px;
`;

export const TotalPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: right;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  background-color: #ddc4c1;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    background-color: #d6d6d6;
  }
`;