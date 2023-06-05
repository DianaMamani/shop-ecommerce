import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-right: 1rem;
`;

export const NavLink = styled(Link)`
  font-size: 14px;
  color: #333333;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:focus,
  &:hover {
    color: pink;  
    border-bottom: 2px solid;  
  }
 
  &:focus{
    border-bottom-color: pink;
    outline: none;
  }
`;
