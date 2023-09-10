import React from 'react';
import './AboutSection.scss';
import Button from '../Button/Button';
import organicImage from '../../img/about-organic.png';
import qualityImage from '../../img/about-quality.png';

function AboutSection () {
    return (
        <section className={'about'}>
            <div className={'about__container'}>
                <div className={'about__info'}>
                    <p className={'about__subtitle'}>About us</p>
                    <h2 className={'about__title'}>We believe in working accredited farmers</h2>
                    <p className='about__text'>
                        Simply dummy text of the printing and typesetting industry. Lorem had 
                        ceased to been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley.
                    </p>
                    <div className='about__card'>
                        <img className='about__card-image' src={organicImage} alt='organic' />
                        <div className='about__card-wrapper'>
                            <p className='about__card-title'>Organic foods only</p>
                            <p className='about__card-text'>
                                Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            </p>
                        </div>
                    </div>
                    <div className='about__card'>
                        <img className='about__card-image' src={qualityImage} alt='quality' />
                        <div className='about__card-wrapper'>
                            <p className='about__card-title'>Quality standards</p>
                            <p className='about__card-text'>
                                Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            </p>
                        </div>
                    </div>
                    <Button className={'about__btn'} label='Shop now' showCircleArrow={true} />
                </div>
            </div>
        </section>
    );
}
export default AboutSection;