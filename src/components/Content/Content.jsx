import { Content } from "./styles";
import banner from "../../assets/banner.jpg";

export const MainContent = () =>{
    return(
        <Content>
            <img src={banner} height="100%" width="100%" alt="img"></img>
            <img src={banner} height="100%" width="100%" alt="img"></img>
            <img src={banner} height="100%" width="100%" alt="img"></img>
            <img src={banner} height="100%" width="100%" alt="img"></img>
        </Content>
    );
}