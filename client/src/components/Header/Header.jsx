import { Link } from 'react-router-dom';
import './Header.scss';
import logoImage from '../../img/logo.png';
import searchImage from '../../img/search.png';
import cartImage from '../../img/cart.png';

function Header() {
    return (
        <header className={'header'}>
            <Link to="/" className={'header__logo-link'}>
                <img className={'header__logo'} src={logoImage} alt="logo"/>
                <p className={'header__logo-text'}>Organick</p>
            </Link>
            <nav className={'header__menu'}>
                <ul className={'header__list'}>
                    <li className={'header__item'}>
                        <Link to="/" className={'header__link header__link-home'}>Home</Link>
                    </li>
                    <li className={'header__item'}>
                        <a href="#" className={'header__link'}>About</a>
                    </li>
                    <li className={'header__item'}>
                        <a href="#" className={'header__link'}>Pages &#9662;</a>
                    </li>
                    <li className={'header__item'}>
                        <a href="#" className={'header__link'}>Shop</a>
                    </li>
                    <li className={'header__item'}>
                        <a href="#" className={'header__link'}>Projects</a>
                    </li>
                    <li className={'header__item'}>
                        <a href="#" className={'header__link'}>News</a>
                    </li>
                    <li className={'header__item'}>
                        <a href="#" className={'header__link'}>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className={'header__search'}>
                <div className={'header__search-circle'}>
                    <img className={'header__search-image'} src={searchImage} alt="search"/>
                </div>
            </div>
            <Link to="/cart" className={'header__cart'}>
                <div className={'header__cart-circle'}>
                    <img className={'header__cart-image'} src={cartImage} alt="cart"/>
                </div>
                <p className={'header__cart-txt'}>Cart</p>
            </Link>
        </header>
    )
}
export default Header;