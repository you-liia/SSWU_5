import React, { useState, useEffect } from 'react';
import './Cart.scss';
import Button from '../../components/Button/Button';
import CartProduct from "../../components/CartProduct/CartProduct";
import CartForm from "../../components/CartForm/CartForm";

function Cart() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    let totalCost = 0;
    let totalDiscount = 0;

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            setCartItems(parsedCart);
        }
    }, []); 

    const handleQuantityChange = (productId, newQuantity) => {
        const updatedCart = cartItems.map((item) => {
            if (item.product.product_id === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleDelete = (productId) => {
        const updatedCart = cartItems.filter((item) => item.product.product_id !== productId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    cartItems.forEach((item) => {
        const { product, quantity } = item;
        if (product.discount_price) {
            totalCost += product.discount_price * quantity;
            totalDiscount += (product.price - product.discount_price) * quantity;
        } else {
            totalCost += product.price * quantity;
        }
    });

    function changeFormVisibility() {
        setIsFormVisible(true);
    }    

    return (
        <section className="cart">
            <div className={'cart__bg'}> 
                <p className={'cart__bg-text'}>Cart</p>
            </div>
            <div className={'cart__order'}>
                <div className={'cart__order-area'}>
                    <div className={'cart__container'}>
                        {cartItems.map((item, index) => (
                            <CartProduct 
                                key={index} 
                                item={item} 
                                onQuantityChange={handleQuantityChange}
                                onDelete={handleDelete}
                            />
                        ))}
                        <div className={'cart__total'}>
                            <div className={'cart__total-cost-wrapper'}>
                                <p className={'cart__total-cost-text'}>Total cost</p>
                                <p className={'cart__total-cost'}>{totalCost}$</p>
                            </div>
                            <div className={'cart__discount-wrapper'}>
                                <p className={'cart__discount-text'}>Discount</p>
                                <p className={'cart__discount'}>{totalDiscount}$</p>
                            </div>
                        </div>
                        {isFormVisible ? (
                            <CartForm 
                                cartItems={cartItems}
                                totalCost={totalCost}
                                totalDiscount={totalDiscount}
                            />
                        ) : (
                            <Button 
                                className={'cart__btn'} 
                                label="To order" 
                                showCircleArrow={true}  
                                onClick={totalCost === 0 ? undefined : changeFormVisibility}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart;