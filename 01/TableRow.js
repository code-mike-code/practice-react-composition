import React from 'react';

function TableRow( {item} ) {
    const { id, name, price, quantity } = item;
    const sum = price * quantity;

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price.toFixed(2)} zł</td>
            <td>{quantity}</td>
            <td>{sum.toFixed(2)} zł</td>
        </tr>
    )
}

export default TableRow;