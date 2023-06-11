import { TableContainer, Table, TableCell, TableHeader, TableFooterRow, TableRow } from "./styles";

export const Brief = ({items}) => {
    console.log(items);
    const calculateTotal = () => {
        return items.reduce((subtotal, item) => {
            return subtotal + item.price * item.qty;
        }, 0);
    };

    return (
        <TableContainer>
            <h3>Tu pedido</h3>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>Producto</TableHeader>
                        <TableHeader>Precio</TableHeader>
                        <TableHeader>Cantidad</TableHeader>
                        <TableHeader>Subtotal</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{item.qty}</TableCell>
                            <TableCell>{(item.price * item.qty).toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
                <tfoot>
                    <TableFooterRow>
                        <TableCell colSpan="3">Total</TableCell>
                        <TableCell>{calculateTotal()}</TableCell>
                    </TableFooterRow>
                </tfoot>
            </Table>
        </TableContainer>
    );
}