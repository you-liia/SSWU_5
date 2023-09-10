import React from 'react';
import './OfferBannersSection.scss';

function OfferBannersSection () {
    return (
        <section className={'offer-banners'}>
            <div className={'offer-banners__container'}>
                <div className={'offer-banners__item offer-banners__item_natural'}>
                    <div className='offer-banners__item-info'>
                        <p className={'offer-banners__item-subtitle offer-banners__item-subtitle_natural'}>Natural!!!</p>
                        <h2 className={'offer-banners__item-title offer-banners__item-title_natural'}>Get Garden Fresh Fruits</h2>
                    </div>
                </div>
                <div className={'offer-banners__item offer-banners__item_discount'}>
                    <div className='offer-banners__item-info'>
                        <p className={'offer-banners__item-subtitle'}>Offer!!!</p>
                        <h2 className={'offer-banners__item-title'}>Get 10% off <br/> on Vegetables</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default OfferBannersSection;