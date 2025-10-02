import React from 'react';

class File extends React.Component {
    render() {
        const { onFileChange } = this.props;
        return <input type="file" onChange={onFileChange} multiple />;
    }
}

export default File;