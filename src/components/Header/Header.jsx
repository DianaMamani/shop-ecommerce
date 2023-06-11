import { NavBar } from "../NavBar/NavBar";
import { BrandLayer, HeaderContainer, Logo, NavbarLayer } from "./styles";
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

export const Header = () =>{
    return (
        <HeaderContainer>
            <BrandLayer>
                <Link to='/'>
                    <Logo src={logo} />
                </Link>
            </BrandLayer>
            <NavbarLayer>
                <NavBar />
            </NavbarLayer>
        </HeaderContainer>
    );
}