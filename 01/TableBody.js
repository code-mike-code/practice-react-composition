import React from 'react';
import TableRow from './TableRow';
import Table from './Table';

function TableBody( {data} ) {
    return (
        <tbody>
            {data.map(product => (<TableRow key={product.id} item={product} />))}
        </tbody>
    )
}

export default TableBody;