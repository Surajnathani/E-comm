import { Link } from 'react-router-dom';
import { useProduct } from '../../context/product';
import './cart.css'
import { IoClose } from 'react-icons/io5';

const Cart = () => {
    const { cartItems, removeProduct } = useProduct();

    const totalPrice = cartItems && cartItems.length ?
        cartItems.reduce((total, product) => {
            return total + (product.originalPrice * product.quantity);
        }, 0)
        : 0;

    const totalDiscountPrice = cartItems && cartItems.length ?
        cartItems.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0)
        : 0;

    const shippingFee = cartItems && cartItems.length ?
        cartItems.reduce((total, product) => {
            if (product.quantity === 1 && product.price < 500) {
                return total + product.shippingFee;
            } else {
                return total;
            }
        }, 0)
        : 0;

    return (
        cartItems && cartItems.length ?
            <div className='sectionContainer headerPages'>
                <div className="headerSection">
                    <h3>My Cart</h3>
                    <p><Link to="/">home</Link> / <Link to="/cart">cart</Link></p>
                </div>
                <div className='cartHeader'>
                    <div className='cartProducts'>
                        {
                            cartItems.map(product => (
                                <div className='cartProduct' key={product.id}>
                                    <img src={product.thumbnail} className='cartProductImage' alt="" width={100} />
                                    <div className="cartProductDetails">
                                        <div className="cartProductHead">
                                            <span className="product-catagory">{product.category}</span>
                                            <span className="removeIcon"><IoClose onClick={() => removeProduct(product.id)} /></span>
                                        </div>
                                        <Link to={{ pathname: `/product/${product.id}` }}>
                                            <h4>{product.title}</h4>
                                            <p>{product.description.slice(0, 100)}...</p>
                                            <div className="product-bottom-details">
                                                <div className="product-price"><p><small>₹{product.originalPrice}</small>₹{product.price * product.quantity}</p></div>
                                                <p>qty {product.quantity}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='cartSummary'>
                        <h4>Price Details({cartItems.length} items)</h4>
                        <div className='cartPriceContainer'>
                            <div className='cartPrice'>
                                <p>Total MRP</p>
                                <p>₹{totalPrice}</p>
                            </div>
                            <div className='cartPrice'>
                                <p>Discount on MRP</p>
                                <p>-₹{totalPrice - totalDiscountPrice}</p>
                            </div>
                            <div className='cartPrice'>
                                <p>Shipping Fee</p>
                                <p>₹{shippingFee}</p>
                            </div>
                            <hr style={{ color: "#d1cccc" }} />
                            <div className='cartPrice'>
                                <h4>Total Amount</h4>
                                <h4>{totalDiscountPrice + shippingFee}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : <h1 className='empty'>No product</h1>
    )
}

export default Cart