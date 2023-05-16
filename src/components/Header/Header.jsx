import NavBar from "../NavBar/NavBar";
import { BrandLayer, ContactLayer, HeaderContainer, Brand, NavbarLayer } from "./styles";

export const Header = () =>{
    return (
        <HeaderContainer>
            <ContactLayer>
            </ContactLayer>
            <BrandLayer>
                <Brand>URBAN BOUTIQUE</Brand>
            </BrandLayer>
            <NavbarLayer>
                <NavBar/>
            </NavbarLayer>
        </HeaderContainer>
    );
}