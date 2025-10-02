import React from 'react';

function Product(props) {
    const {
        data: { name, price },
        isCategory,
        isInCart,
        onAddToCart,
        onRemoveFromCart,
    } = props;

    const handleAddToCart = () => onAddToCart();
    const handleRemoveFromCart = () => onRemoveFromCart();

    return (
        <article className="product">
            <p>{name} - {price.toFixed(2)} zł</p>
            {isCategory ? (
                <button
                    className="btn btn-add"
                    disabled={isInCart}
                    onClick={handleAddToCart}
                >
                    {isInCart ? 'W koszyku' : 'Dodaj do koszyka'}
                </button>
            ) : (
                <button className="btn btn-remove" onClick={handleRemoveFromCart}>
                    Usuń z koszyka
                </button>
            )}
        </article>
    );
}

export default Product;