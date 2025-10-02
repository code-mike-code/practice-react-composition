import React from 'react';

function Cart({ children }) {
    return (
        <section className="cart">
            <h2 className="cart-title">Koszyk</h2>
            {children.length > 0 ? children : <p className="cart-empty">Koszyk jest pusty.</p>}
        </section>
    );
}

export default Cart;