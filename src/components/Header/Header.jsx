import NavBar from "../NavBar/NavBar";
import { BrandLayer, ContactLayer, Header, Brand, NavbarLayer } from "./styles";

export const EHeader = () =>{
    return (
        <Header>
            <ContactLayer>
                <span> Contact: sthing@gmail.com</span>
            </ContactLayer>
            <BrandLayer>
                <Brand>URBAN BOUTIQUE</Brand>
            </BrandLayer>
            <NavbarLayer>
                <NavBar/>
            </NavbarLayer>
        </Header>
    );
}