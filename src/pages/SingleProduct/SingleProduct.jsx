import { useEffect, useState } from 'react'
import './singleProduct.css'
import { Link, useParams } from 'react-router-dom';
import { useProduct } from '../../context/product';
import { FaStar } from "react-icons/fa6";
import { IoStarHalf } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const SingleProduct = () => {
    const params = useParams();
    const [singleProduct, setSingleProduct] = useState("");

    const { productData, addToCart, addToWishList } = useProduct();

    useEffect(() => {
        if (productData) {
            setSingleProduct(productData.find(product => product.id == params.id));
        }
    }, [productData, params.id]);

    const [image, setImage] = useState(null);
    const [activeImageSrc, setActiveImageSrc] = useState(null);

    const handleImage = (e) => {
        setImage(e.target.src);
        setActiveImageSrc(e.target.src);
    }

    const [quantity, setQuantity] = useState(1);
    const handleDec = () => {
        if (quantity <= 1) {
            setQuantity(1);
        } else {
            setQuantity(quantity - 1);
        }
    }

    const handleInc = () => {
        if (quantity >= 10) {
            setQuantity(10);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const handleAddToCart = () => {
        addToCart({ ...singleProduct, quantity: quantity });
    };

    const handleAddToWish = () => {
        addToWishList(singleProduct);
    };

    return (
        <>
            {
                singleProduct ?
                    <div className='sectionContainer headerPages'>
                        <div className="headerSection">
                            <h3>Product</h3>
                            <p><Link to="/">home</Link> / <Link to="/products">product</Link> / <Link to={`${singleProduct.id}`}>{singleProduct.title}</Link></p>
                        </div>
                        <div className="singleProductContainer">
                            <div className="singleProductImage">
                                <div className='singleProductImages'>
                                    <img src={image ? image : singleProduct.thumbnail} alt="" width={400} height={500} />
                                </div>
                                <div className='singleProductAllImages'>
                                    {singleProduct.images.slice(0, 4).map((src, index) => (
                                        <img
                                            key={index}
                                            src={src}
                                            alt=""
                                            width={90}
                                            height={100}
                                            onClick={handleImage}
                                            className={`singleProductAllImage ${src === activeImageSrc ? ' singleProductAllImageActive' : ''}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="singleProductDescription">
                                <div className='singleProductDesc'>
                                    <p>{singleProduct.brand}</p>
                                    <h3 className='singleProductTitle'>{singleProduct.title}</h3>
                                    <div className='price'>
                                        <h4>₹{singleProduct.price}</h4>
                                        <p>MRP <span>₹{singleProduct.originalPrice}</span> </p>
                                        <p>({singleProduct.discountPercentage}% OFF)</p>
                                    </div>
                                    <div className='reviewContainer'>
                                        <div className='reviewIcons'>
                                            {
                                                [...Array(5)].map((_, index) => {
                                                    const averageRating = singleProduct.rating;
                                                    const filledStars = Math.floor(averageRating);
                                                    const hasHalfStar = averageRating % 1 !== 0;
                                                    if (index < filledStars) {
                                                        return <FaStar key={index} className='reviewIcon' style={{ color: '#ffc300' }} />;
                                                    } else if (hasHalfStar && index === filledStars) {
                                                        return <IoStarHalf key={index} className='reviewIcon' style={{ color: '#ffc300' }} />;
                                                    } else {
                                                        return <FaStar key={index} className='reviewIcon' style={{ color: '#c8c8c8' }} />;
                                                    }
                                                })
                                            }
                                        </div>
                                        <p>{singleProduct.rating} reviews <small>({singleProduct.review})</small></p>
                                    </div>
                                </div>
                                <div>
                                    <p>{singleProduct.description}</p>
                                </div>
                                <div className='details'>
                                    <li>Available: <span>in stock</span></li>
                                    <li>Category: <span>{singleProduct.category}</span></li>
                                    <li>Shipping Fee: <span>Free</span></li>
                                    <li>Return: <span> 14 day easy Return</span></li>
                                    <li>Quality: <span>Satisfaction 100% Guaranteed</span></li>
                                </div>
                                <div className='quantityContainer'>
                                    <p>Qty</p>
                                    <div>
                                        <button className='decButton' onClick={handleDec}>-</button>
                                        <input type="number" min={1} max={10} value={quantity} />
                                        <button className='incButton' onClick={handleInc}>+</button>
                                    </div>
                                </div>
                                <div className='buttons'>
                                    <button className='button singleProductBtn' onClick={handleAddToCart}><IoCartOutline className='icon' /> Add to cart</button>
                                    <button className='button singleProductBtn' onClick={handleAddToWish}><IoMdHeartEmpty className='icon' /> WishList</button>
                                </div>
                            </div>
                        </div>
                    </div >
                    : "loading..."
            }


        </>
    )
}

export default SingleProduct