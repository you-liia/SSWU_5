import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductsSection.scss';
import Button from '../Button/Button';
import ProductCard from '../ProductCard/ProductCard';
import ProductWindow from '../ProductWindow/ProductWindow';

function ProductsSection() {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get('http://localhost:8000/products');
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllProducts();
    }, []);

    const toggleProductWindow = (product) => {
        setSelectedProduct(product);
        setOverlayVisible(!overlayVisible);
    };

    const handleOverlayClick = (event) => {
        if (!event.target.closest('.products__window')) {
            setOverlayVisible(false);
            setSelectedProduct(null);
        }
    };

    const toggleProductsView = () => {
        setShowAll(!showAll);
    };

    const addToCart = (cartItem) => {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingCartItemIndex = currentCart.findIndex(
            (item) => item.product.product_id === cartItem.product.product_id
        );
        if (existingCartItemIndex !== -1) {
            currentCart[existingCartItemIndex].quantity += cartItem.quantity;
        } else {
            currentCart.push(cartItem);
        }
        setCart(currentCart);
        localStorage.setItem('cart', JSON.stringify(currentCart));
    };
    
    const sortedProducts = products.sort((a, b) => (a.discount_price !== null ? -1 : 1));
    const displayedProducts = showAll ? sortedProducts : sortedProducts.slice(0, 8);

    return (
        <section className={'products'} id="products">
            <div className={'products__container'}>
                <p className={'products__subtitle'}>Categories</p>
                <h2 className={'products__title'}>Our products</h2>
                <div className={'products__cards'}>
                    {displayedProducts.map((product) => (
                        <ProductCard
                            key={product.product_id}
                            product={product}
                            onClick={() => toggleProductWindow(product)}
                        />
                    ))}
                </div>
                <Button
                    className={showAll ? 'products__btn-hide' : 'products__btn-load-more'}
                    label={showAll ? 'Hide all' : 'Load more'}
                    showCircleArrow={true}
                    onClick={toggleProductsView}
                />
            </div>
            {overlayVisible && (
                <div className="products__overlay" onClick={handleOverlayClick}>
                    <ProductWindow
                        product={selectedProduct}
                        onClose={() => toggleProductWindow(null)}
                        onAddToCart={addToCart}
                    />
                </div>
            )}
        </section>
    );
}

export default ProductsSection;