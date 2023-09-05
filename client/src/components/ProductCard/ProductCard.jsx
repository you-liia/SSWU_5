import React from 'react';
import './ProductCard.scss';

function ProductCard({ product, onClick }) {
    return (
        <div className={'products__card'} onClick={onClick}>
            <p className={'products__category'}>{product.category}</p>
            <img 
                className={'products__image'}
                src={require("../../img/products/" + product.image)}
                alt="product"
            />
            <p className={'products__name'}>{product.product_name}</p>
            <hr className={'products__line'}/>
            <div className={'products__details'}>
                {product.discount_price ? (
                    <>
                        <p className={'products__price'}>${product.price.toFixed(2)}</p>
                        <p className={'products__discount-price'}>${product.discount_price.toFixed(2)}</p>
                    </>
                ) : (
                    <p className={'products__one-price'}>${product.price.toFixed(2)}</p>
                )}
                <div className={'products__rating'}>
                    {Array(5).fill().map((_, index) => (
                        <span key={index} className="fa fa-star checked"></span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;