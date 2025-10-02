import React from 'react';

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (this.textareaRef.current) {
            const textarea = this.textareaRef.current;
            return { canGrow: textarea.offsetHeight < 100 };
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const textarea = this.textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; // Reset height
            const newHeight = Math.min(textarea.scrollHeight, 100);
            textarea.style.height = `${newHeight}px`;
        }
    }

    render() {
        const { content, onChange } = this.props;
        const style = {
            minHeight: '38px',
            lineHeight: '1.5',
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '100%',
            boxSizing: 'border-box',
            resize: 'none',
        };
        return <textarea ref={this.textareaRef} style={style} value={content} onChange={onChange}></textarea>;
    }
}

export default Textarea;