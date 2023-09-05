import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';
import Button from '../../components/Button/Button';

function NotFound () {
    return (
        <section className={'error-404'}>
            <div className={'error-404__container'}>
                <div className={'error-404__info'}>
                    <p className={'error-404__number'}>404</p>
                    <p className={'error-404__text'}>Page not found</p>
                    <p className={'error-404__description'}>The page you are looking for doesn't exist or has been moved</p>
                    <Link to="/">
                        <Button label="Go to Homepage" showCircleArrow={true} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default NotFound;