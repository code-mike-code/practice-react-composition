import React from 'react';

function TableFooter( {data} ) {
    const totalSum = data.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);

    return (
        <tfoot>
            <tr>
                <td colSpan="4"><strong>Suma do zapłaty</strong></td>
                <td><strong>{totalSum.toFixed(2)} zł</strong></td>
            </tr>
        </tfoot>
    )
}

export default TableFooter;