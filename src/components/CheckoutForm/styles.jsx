import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ErrorMessage = styled.span`
  color: red;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#4caf50')};
  color: #fff;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;