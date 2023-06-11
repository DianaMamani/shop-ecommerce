import { List } from "./styles";
import { Banner } from "../Banner";

export const BannerList = ({categories}) => {
    console.log(categories);
    return (
        <List>
            {
                categories.map(banner => <Banner key={banner.id}{...banner}/>)
            }
        </List>
    );
}