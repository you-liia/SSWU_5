import React, { useState } from 'react';
import './ProductWindow.scss';
import Button from '../Button/Button';

function ProductWindow(props) {
    const { product, onClose, onAddToCart } = props;
    const [activeTab, setActiveTab] = useState('productDescription');
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        const cartItem = { product, quantity };
        onAddToCart(cartItem);
        onClose();
    };

    return (
        <div className={'products__window'}>
            <div className={'products__window-container'}>
                <div className={'products__window-card-details'}>
                    <div className={'products__window-card'}>
                        <p className={'products__window-category'}>{product.category}</p>
                        <img
                            className={'products__window-image'}
                            src={require(`../../img/products/${product.image}`)}
                            alt="product"
                        />
                    </div>
                    <div className={'products__window-details'}>
                        <p className={'products__window-name'}>{product.product_name}</p>
                        <div className={'products__window-rating'}>
                            {Array(5).fill().map((_, index) => (
                                <span key={index} className="fa fa-star checked"></span>
                            ))}
                        </div>
                        <div className={'products__window-prices'}>
                            {product.discount_price ? (
                                <>
                                    <p className={'products__window-price'}>${product.price.toFixed(2)}</p>
                                    <p className={'products__window-discount-price'}>${product.discount_price.toFixed(2)}</p>
                                </>
                            ) : (
                                <p className={'products__window-one-price'}>${product.price.toFixed(2)}</p>
                            )}
                        </div>
                        <p className={'products__window-text'}>{product.info}</p>
                        <div className={'products__window-add-to-cart'}>
                            <label className={'products__window-quantity'} htmlFor="products__quantity">
                                Quantity:
                            </label>
                            <input
                                className={'products__window-quantity-input'}
                                id="products__quantity"
                                type="number"
                                min="1"
                                max="100"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                            />
                            <Button
                                className={'products__window-btn-add'}
                                label="Add to cart"
                                showCircleArrow={true}
                                onClick={handleAddToCart}
                            />
                        </div>
                    </div>
                    <div className={'products__window-close'}>
                        <Button className={'products__window-btn-close'} label="X" onClick={onClose} />
                    </div>
                </div>
                <div className={'products__window-info'}>
                    <Button
                        className={`products__window-btn-info ${
                            activeTab === 'productDescription' ? '' : 'products__window-btn-info_inactive'
                        }`}
                        label="Product description"
                        onClick={() => setActiveTab('productDescription')}
                    />
                    <Button
                        className={`products__window-btn-info ${
                            activeTab === 'additionalInfo' ? '' : 'products__window-btn-info_inactive'
                        }`}
                        label="Additional info"
                        onClick={() => setActiveTab('additionalInfo')}
                    />
                    <p className={'products__window-description-info'}>
                        {activeTab === 'productDescription' ? product.product_description : product.additional_info}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductWindow;