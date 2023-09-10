import React from 'react';
import './TestimonialSection.scss';
import customerImage from '../../img/customer-sara-taylor.png';

function TestimonialSection () {

    const testimonialCounters = [
        { number: '100%', text: 'Organic' },
        { number: '285', text: 'Active Product' },
        { number: '350+', text: 'Organic Orchads' },
        { number: '25+', text: 'Years of Farming' },
    ];

    return (
        <section className={'testimonial'}>
            <div className={'testimonial__container'}>
                <div className={'testimonial__info'}>
                    <p className={'testimonial__subtitle'}>Testimonial</p>
                    <h2 className={'testimonial__title'}>What our customer saying?</h2>
                    <img className='testimonial__image' src={customerImage} alt='person' />
                    <div className={'testimonial__rating'}>
                        {Array(5).fill().map((_, index) => (
                            <span key={index} className="fa fa-star checked"></span>
                        ))}
                    </div>
                    <p className={'testimonial__text'}>
                        Simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been.
                    </p>
                    <p className={'testimonial__name'}>Sara Taylor</p>
                    <p className={'testimonial__consumer'}>Consumer</p>
                    <div className='testimonial__dots'>
                        <div className='testimonial__dot'></div>
                        <div className='testimonial__dot testimonial__dot_active'></div>
                        <div className='testimonial__dot'></div>
                    </div>
                    <div className='testimonial__line'></div>
                    <div className='testimonial__counters'>
                        {testimonialCounters.map((item, index) => (
                            <div key={index} className='testimonial__counter'>
                                <p className='testimonial__counter-info'>
                                    {item.number} <span className='testimonial__counter-text'>{item.text}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default TestimonialSection;