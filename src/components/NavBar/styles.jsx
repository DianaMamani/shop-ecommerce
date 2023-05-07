import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavbarNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-right: 1rem;
`;

export const NavLink = styled.a`
  font-size: 14px;
  color: #333333;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

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
