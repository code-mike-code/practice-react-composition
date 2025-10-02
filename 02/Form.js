import React from 'react';

class Form extends React.Component {
    render() {
        const { onUserAdd } = this.props;
        this.inputRef = React.createRef();

        const handleSubmit = (e) => {
            e.preventDefault();
            const name = this.inputRef.current.value;
            if (name.trim()) {
                onUserAdd(name);
                this.inputRef.current.value = '';
            }
        }

        return (
            <form onSubmit={handleSubmit}>
                <input ref={this.inputRef} placeholder="Imię i nazwisko" />
                <input type="submit" value="Dodaj" />
            </form>
        )
    }
}

export default Form;