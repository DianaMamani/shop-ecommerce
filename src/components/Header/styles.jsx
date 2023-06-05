import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
  z-index: 9999;
`;

export const BrandLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const NavbarLayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #F2E4E4;
`;

