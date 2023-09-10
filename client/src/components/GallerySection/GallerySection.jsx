import React from 'react';
import './GallerySection.scss';

function GallerySection () {

    const galleryItems = [
        { className: 'gallery__card_juice', text: 'organic juice' },
        { className: 'gallery__card_food', text: 'organic food' },
        { className: 'gallery__card_cookies', text: 'organic cookies' },
    ];

    return (
        <section className={'gallery'}>
            <div className={'gallery__container'}>
                {galleryItems.map((item, index) => (
                    <div key={index} className={`gallery__card ${item.className}`}>
                        <p className="gallery__card-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default GallerySection;