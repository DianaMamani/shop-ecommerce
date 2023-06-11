import { Card, CardImg } from "./styles";
import { Link } from "react-router-dom";

export const Banner = ({img, route}) => {
    return (
        <>
            <Link to={route}>
                <Card>
                    <CardImg src={img} />
                </Card>
            </Link>
        </>
    );
}