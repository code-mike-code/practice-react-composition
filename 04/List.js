import React from 'react';
import FileItem from './FileItem';

class List extends React.Component {
    render() {
        const { files } = this.props;
        return (
            <ul>
                {files.length > 0
                    ? files.map(file => <FileItem key={file.id} data={file} />)
                    : <li>Brak wgranych plików. Wybierz pliki, aby zobaczyć ich zawartość.</li>
                }
            </ul>
        );
    }
}

export default List;