import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import instagramImage from '../../img/instagram.png';
import facebookImage from '../../img/facebook.png';
import twitterImage from '../../img/twitter.png';
import pinterestImage from '../../img/pinterest.png';
import logoImage from '../../img/logo.png';

function Footer () {
    return (
        <footer className={'footer'} id="footer">
        <div className={'footer__container'}>
            <div className="footer__contacts-wrapper">
                <p className={'footer__contacts-title'}>Contact us</p>
                <div className={'footer__contacts-item'}>
                    <p className={'footer__contacts-txt'}>Email</p>
                    <a href="mailto:needhelp@Organia.com" className={'footer__contacts'}>needhelp@Organia.com</a>
                </div>
                <div className={'footer__contacts-item'}>
                    <p className={'footer__contacts-txt'}>Phone</p>
                    <a href="tel:666888888" className={'footer__contacts'}>666 888 888</a>
                </div>
                <div className={'footer__contacts-item'}>
                    <p className={'footer__contacts-txt'}>Address</p>
                    <p className={'footer__contacts'}>88 road, borklyn street, USA</p>
                </div>
            </div>
            <div className={'footer__vertical-line'}></div>
            <div className={'footer__summary'}>
                <a href="#" className={'footer__logo-link'}>
                    <img 
                        className={'footer__logo'} 
                        src={logoImage} 
                        alt="logo"
                    />
                    <p className={'footer__logo-text'}>Organick</p>
                </a>
                <p className={'footer__summary-text'}>Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum simply dummy text of the printing 
                </p>
                <div className={'footer__social-media'}>
                    <a className={'footer__social-media-link'}  href="https://www.instagram.com">
                        <img 
                            className={'footer__social-media-item footer__social-media-item_instagram'} 
                            src={instagramImage} 
                            alt="instagram"
                        />
                    </a>
                    <a className={'footer__social-media-link'} href="https://www.facebook.com">
                        <img 
                            className={'footer__social-media-item footer__social-media-item_facebook'} 
                            src={facebookImage} 
                            alt="facebook"
                        />
                    </a>
                    <a className={'footer__social-media-link'} href="https://www.twitter.com">
                        <img 
                            className={'footer__social-media-item footer__social-media-item_twitter'} 
                            src={twitterImage} 
                            alt="twitter"
                        />
                    </a>
                    <a className={'footer__social-media-link'} href="https://www.pinterest.com">
                        <img 
                            className={'footer__social-media-item footer__social-media-item_pinterest'} 
                            src={pinterestImage} 
                            alt="pinterest"
                        />
                    </a>
                </div>
            </div>
            <div className={'footer__vertical-line'}></div>
            <nav className={'footer__pages'}>
                <ul className={'footer__pages-list'}>
                    <li className={'footer__pages-item-title'}>
                        <p className={'footer__pages-title'}>Utility pages</p>
                    </li>
                    <li className={'footer__pages-item'}>
                        <a href="#" className={'footer__pages-link'}>Style guide</a>
                    </li>
                    <li className={'footer__pages-item'}>
                        <Link to="/NotFound" className={'footer__pages-link'}>404 not found</Link>
                    </li>
                    <li className={'footer__pages-item'}>
                        <a href="#" className={'footer__pages-link'}>Password protected</a>
                    </li>
                    <li className={'footer__pages-item'}>
                        <a href="#" className={'footer__pages-link'}>Licences</a>
                    </li>
                    <li className={'footer__pages-item'}>
                        <a href="#" className={'footer__pages-link'}>Changelog</a>
                    </li>
                </ul>
            </nav>
        </div>
        <hr className={'footer__horizontal-line'} />
        <p className={'footer__rights'}>
            Copyright @ <span className={'footer__rights_bold'}>Organick</span>
            | Designed by <span className={'footer__rights_bold'}>ViktorFlow</span> 
            Templates - Powered by <span className={'footer__rights_bold'}>Webflow</span>
        </p>
    </footer>
    )
}
export default Footer;