import { useState } from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';
import Search from '../search/Search';
import './navbar.css';
import { useProduct } from '../../context/product';

function Navbar() {
    const [isMenuActive, setMenuActive] = useState(false);
    const { cartLength } = useProduct();

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <header className="header" id="header">
            <nav className="navbar sectionContainer">
                <Link to="/" className="brand">E-cart</Link>
                <Search />
                <div className={`menu ${isMenuActive ? 'is-active' : ''}`} id="menu">
                    <ul className="menu-inner">
                        <li>
                            <NavLink to="/" className="menu-link" onClick={closeMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className="menu-link" onClick={closeMenu}>
                                Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" className="menu-link" onClick={closeMenu}>
                                {
                                    isMenuActive ?
                                        <div className='iconLink cartIcon'>
                                            <IoCartOutline className='icon' />
                                            <span className='cartTotalItem'>{cartLength}</span>
                                            <p>Cart</p>
                                        </div>
                                        :
                                        <div className='cartIcon'>
                                            <IoCartOutline className='icon' />
                                            <span className='cartTotalItem'>{cartLength}</span>
                                        </div>
                                }
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/wishlist" className="menu-link" onClick={closeMenu}>
                                {
                                    isMenuActive ?
                                        <div className='iconLink'>
                                            <IoMdHeartEmpty className='icon' />
                                            <p>Wishlist</p>
                                        </div>
                                        : <IoMdHeartEmpty className='icon' />
                                }
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" className="menu-link" onClick={closeMenu}>
                                {
                                    isMenuActive ?
                                        <div className='iconLink'>
                                            <img src="/avatar.png" className='icon' width={30} />
                                            <p>Profile</p>
                                        </div>
                                        : <img src="/avatar.png" className='icon' width={30} />
                                }
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="burger" id="burger" onClick={toggleMenu}>
                    {
                        isMenuActive ? <IoClose className='icon' /> : <RxHamburgerMenu className='icon' />
                    }
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
