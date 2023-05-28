import { Button, Container, Value } from "./styles";

export const ItemCount = ({ count, setCount }) => {

    const handleIncrement = () => {
        setCount(count += 1);
    }

    const handleDecrement = () => {
        if (count > 1)
            setCount(count -= 1);
    }

    return (
        <Container>
            <Button onClick={handleDecrement}>-</Button>
            <Value>{count}</Value>
            <Button onClick={handleIncrement}>+</Button>
        </Container>
    );
}
