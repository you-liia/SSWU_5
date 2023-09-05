import React from 'react';
import './CartProduct.scss';
import Button from '../Button/Button';

function CartProduct({ item, onQuantityChange, onDelete }) {

    const handleQuantityChange = (newQuantity) => {
        onQuantityChange(item.product.product_id, parseInt(newQuantity, 10));
    };

    const handleDelete = () => {
        onDelete(item.product.product_id);
    };

    return (
        <div className={'cart__product'}>
            <img 
                className={'cart__image'} 
                src={require(`../../img/products/${item.product.image}`)} 
                alt="product"
            />
            <p className={'cart__name'}>{item.product.product_name}</p>
            {item.product.discount_price ? (
                <>
                    <p className={'cart__price'}>${item.product.price.toFixed(2)}</p>
                    <p className={'cart__discount-price'}>${item.product.discount_price.toFixed(2)}</p>
                </>
            ) : (
                <p className={'cart__one-price'}>${item.product.price.toFixed(2)}</p>
            )}
            <label className={'cart__quantity'} htmlFor={`cart__quantity-${item.product.product_id}`}>Quantity:</label>
            <input 
                className={'cart__quantity-input'} 
                id={`cart__quantity-${item.product.product_id}`} 
                type="number" 
                min="1" 
                max="100" 
                value={item.quantity}
                onChange={(e) => handleQuantityChange(e.target.value)}
            />
            <Button 
                className={'cart__btn-delete'} 
                label="X"
                onClick={handleDelete}
            />
        </div>
    );
}
export default CartProduct;