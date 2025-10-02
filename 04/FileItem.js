import React from 'react';

function FileItem({ data }) {
    const { name, size, content } = data;

    return (
        <li>
            <article>
                <header>
                    <h3>{name}</h3>
                    <p>Rozmiar: {size} bajtów</p>
                </header>
                <pre>{content}</pre>
            </article>
        </li>
    );
}

export default FileItem;