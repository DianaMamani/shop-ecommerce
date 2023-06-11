import { List } from "./styles";
import banners from './banners.json';
import { Banner } from "../Banner";

export const BannerList = () => {
    return (
        <List>
            {
                banners.map(banner => <Banner key={banner.id}{...banner}/>)
            }
        </List>
    );
}