import React from 'react';

import ListItem from './ListItem';

function List({ items }) {
    return (
        <ul>
            {items.map(user => (
                <ListItem key={user.id} name={user.name} />
            ))}
        </ul>
    )
}

export default List;
