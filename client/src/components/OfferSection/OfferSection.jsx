import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OfferSection.scss';
import ProductCard from '../ProductCard/ProductCard';

function OfferSection () {

    const [products, setProducts] = useState([]);

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

    const displayedProducts = products
        .sort((a, b) => (a.discount_price !== null ? -1 : 1))
        .slice(-4);

    return (
        <section className={'offer'}>
            <div className={'offer__container'}>
                <p className={'offer__subtitle'}>Offer</p>
                <h2 className={'offer__title'}>We offer organic for you</h2>
                <div className='offer__cards'>
                    {displayedProducts.map((product) => (
                        <ProductCard
                            key={product.product_id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default OfferSection;