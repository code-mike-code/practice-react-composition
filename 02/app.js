import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    addUser = (name) => {
        const newUser = {
            id: Date.now(),
            name: name,
        };
        this.setState(prevState => ({
            usersList: [...prevState.usersList, newUser],
        }));
    }


    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form onUserAdd={this.addUser} />
                <List items={ usersList } />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
