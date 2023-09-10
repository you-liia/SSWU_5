import React from 'react';
import './NewsSection.scss';
import Button from '../Button/Button';
import personImage from '../../img/person.png';

function NewsSection () {

    const newsCards = [
        {
            className: 'news__card_cabbage',
            day: '25',
            month: 'Nov',
            author: 'Rachi Card',
            title: 'The Benefits of Vitamin D & How to Get It',
            text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
        {
            className: 'news__card_tomato',
            day: '25',
            month: 'Nov',
            author: 'Rachi Card',
            title: 'Our Favourite Summertime Tommeto',
            text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
    ];

    return (
        <section className={'news'}>
            <div className={'news__container'}>
                <p className={'news__subtitle'}>News</p>
                <div className='news__title-btn-wrapper'>
                    <h2 className={'news__title'}>Discover weekly content about organic food, & more</h2>
                    <Button className={'news__btn'} label='More news' showCircleArrow={true} />
                </div>
                <div className='news__cards'>
                    {newsCards.map((card, index) => (
                        <div key={index} className={`news__card ${card.className}`}>
                            <div className='news__circle'>
                                <p className='news__circle-text'>
                                    {card.day} <span className='news__circle-text-month'>{card.month}</span>
                                </p>
                            </div>
                            <div className='news__item'>
                                <div className='news__item-author-wrapper'>
                                    <img className='news__item-image' src={personImage} alt='person' />
                                    <p className={'news__item-author'}>By {card.author}</p>
                                </div>
                                <p className={'news__item-title'}>{card.title}</p>
                                <p className='news__item-text'>{card.text}</p>
                                <Button className={'news__item-btn'} label='Read more' showCircleArrow={true} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default NewsSection;