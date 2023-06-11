import notfound from '../../assets/notfoun.png';
import styled from 'styled-components';

const Img = styled.img`
    width: 45%;
    height: 45%;
`;

export const NotFound = () => {
    return (
        <Img src={notfound} alt='notfound'/>
    );
}