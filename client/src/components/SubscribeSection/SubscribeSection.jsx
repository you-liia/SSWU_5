import React from 'react';
import './SubscribeSection.scss';
import Button from '../Button/Button';

function SubscribeSection () {
    return (
        <section className={'subscribe'}>
            <div className={'subscribe__container'}>
                <div className={'subscribe__info'}>
                    <h2 className={'subscribe__title'}>
                        Subscribe to our Newsletter
                    </h2>
                    <div className='subscribe__form'>
                        <input
                            className={'subscribe__input'}
                            type="email"
                            placeholder="your email address"
                            required
                        />
                        <Button 
                            className={'subscribe__btn'} 
                            label='Subscribe' 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SubscribeSection;