import React from 'react';

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>Nazwa Produktu</th>
                <th>Cena</th>
                <th>Ilość</th>
                <th>Suma do zapłaty</th>
            </tr>
        </thead>
    )
}

export default TableHeader;