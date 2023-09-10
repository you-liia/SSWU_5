import React from 'react';
import './NaturalFoodSection.scss';
import Button from '../Button/Button';

function NaturalFoodSection () {
    return (
        <section className={'natural-food'}>
            <div className={'natural-food__container'}>
                <div className={'natural-food__info'}>
                    <p className={'natural-food__subtitle'}>100% natural food</p>
                    <h2 className={'natural-food__title'}>Choose the best healthier way <br/> of life</h2>
                    <Button className={'natural-food__btn'} label='Explore now' showCircleArrow={true} />
                </div>
            </div>
        </section>
    );
}
export default NaturalFoodSection;