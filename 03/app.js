import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from './data.json';

import './style.css';

class App extends React.Component {
    state = {
        cart: [],
    };

    handleAddToCart = (product) => {
        this.setState(prevState => ({
            cart: [...prevState.cart, product],
        }));
    };

    handleRemoveFromCart = (productId) => {
        this.setState(prevState => ({
            cart: prevState.cart.filter(item => item.id !== productId),
        }));
    };

    render() {
        const { cart } = this.state;
        const cartIds = cart.map(item => item.id);

        const categoryProducts = data.map(product => (
            <Product
                key={product.id}
                data={product}
                isCategory={true}
                isInCart={cartIds.includes(product.id)}
                onAddToCart={() => this.handleAddToCart(product)}
            />
        ));

        const cartProducts = cart.map(product => (
            <Product
                key={product.id}
                data={product}
                onRemoveFromCart={() => this.handleRemoveFromCart(product.id)}
            />
        ));

        return (
            <section>
                <Category>{categoryProducts}</Category>
                <Cart>{cartProducts}</Cart>
            </section>
        );
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
