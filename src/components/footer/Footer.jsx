import { IoLogoFacebook, IoLogoInstagram, IoLogoPinterest, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
    return (
        <div className="footerMainContainer">
            <div className="gridFourColumn sectionContainer">
                <div className="footerContainer">
                    <h4>About us</h4>
                    <div className="footerContainer">
                        <p>Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        <div className="footerIcons">
                            <Link to="https://m.facebook.com/"><IoLogoFacebook className="icon" /></Link>
                            <Link to="https://www.instagram.com/"><IoLogoInstagram className="icon" /></Link>
                            <Link to="https://twitter.com/"><IoLogoTwitter className="icon" /></Link>
                            <Link to="https://www.youtube.com/"><IoLogoYoutube className="icon" /></Link>
                            <Link to="https://in.pinterest.com/"><IoLogoPinterest className="icon" /></Link>
                        </div>
                    </div>
                </div>
                <div className="footerContainer">
                    <h4>Information</h4>
                    <div className="footerInnerContainer">
                        <Link to=""><p>About Us</p></Link>
                        <Link to=""><p>Manufactures</p></Link>
                        <Link to=""><p>Tracking Order</p></Link>
                        <Link to=""><p>Privacy & Policy</p></Link>
                        <Link to=""><p>Terms & Conditions</p></Link>
                    </div>
                </div>
                <div className="footerContainer">
                    <h4>My Account</h4>
                    <div className="footerInnerContainer">
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/cart">My Cart</Link>
                        <Link to="/wishlist">Wishlist</Link>
                        <Link to="/profile">My Account</Link>
                    </div>
                </div>
                <div className="footerContainer">
                    <h4>Contact us</h4>
                    <div className="footerInnerContainer footerContactContainer ">
                        <input type="email" placeholder="Email" className="footerInput" />
                        <textarea type="text" placeholder="Message" className="footerInput contactTextarea" />
                        <button className='button'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer