import React from 'react';
import './ThankYou.scss';
import thanksImage from '../../img/thanks-for-order.png';

function ThankYou() {
    return (
        <section className={'thanks'}>
            <p className={'thanks__text'}>Thank you for your order</p>
            <img
                className={'thanks__image'}
                src={thanksImage} 
                alt="thank you"
            />
        </section>
    )
}

export default ThankYou;