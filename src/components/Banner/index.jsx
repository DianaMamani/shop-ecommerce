import { Card, CardImg } from "./styles";
import { Link } from "react-router-dom";

export const Banner = ({banner, route, description}) => {
    return (
        <>
            <Link to={`/categories/${route}`}>
                <Card>
                    <CardImg src={banner} />
                </Card>
            </Link>
        </>
    );
}