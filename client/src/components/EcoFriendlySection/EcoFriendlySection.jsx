import React from 'react';
import './EcoFriendlySection.scss';
import natureImage from '../../img/eco-friendly.png';

function EcoFriendlySection () {

    const items = [
        { 
            title: 'Start with Our Company First', 
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.' 
        },
        { 
            title: 'Learn How to Grow Yourself', 
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.' 
        },
        { 
            title: 'Farming Strategies of Today', 
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.' 
        },
    ];

    return (
        <section className={'eco-friendly'}>
            <img className='eco-friendly__image' src={natureImage} alt='nature' />
            <div className={'eco-friendly__container'}>
                <div className={'eco-friendly__info'}>
                    <p className={'eco-friendly__subtitle'}>Eco friendly</p>
                    <h2 className={'eco-friendly__title'}>Econis is a Friendly Organic Store</h2>
                    {items.map((item, index) => (
                        <div key={index} className='eco-friendly__item'>
                            <p className='eco-friendly__item-title'>{item.title}</p>
                            <p className='eco-friendly__item-text'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default EcoFriendlySection;