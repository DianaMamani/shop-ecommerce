import { NavBar } from "../NavBar/NavBar";
import { BrandLayer, HeaderContainer, Logo, NavbarLayer } from "./styles";
import logo from '../../assets/logo.png';

export const Header = () =>{
    return (
        <HeaderContainer>
            <BrandLayer>
                <Logo src={logo}/>
            </BrandLayer>
            <NavbarLayer>
                <NavBar/>
            </NavbarLayer>
        </HeaderContainer>
    );
}