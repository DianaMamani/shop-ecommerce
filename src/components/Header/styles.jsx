import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: black;
  z-index: 9999;
`;

export const ContactLayer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
  color: #ffffff;
`;

export const BrandLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: black;
`;

export const Brand = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  text-align: left;
`;

export const NavbarLayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #F2E4E4;
  border-top: 1px solid #F2E4E4;
`;

