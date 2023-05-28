import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
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

export const Value = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 10px;
`;