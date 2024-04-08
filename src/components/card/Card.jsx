/* eslint-disable react/prop-types */
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import './card.css'

const Card = ({ product }) => {
    const { id, title, description, price, category, thumbnail, discountPercentage, originalPrice } = product;

    return (
        <Link to={{ pathname: `/product/${id}` }}>
            <div className="product-card">
                <div className="badge">{discountPercentage}%</div>
                <div className="product-tumb">
                    <img src={thumbnail} alt="" />
                </div>
                <div className="product-details">
                    <span className="product-catagory">{category}</span>
                    <h4>{title.substring(0, 20)}...</h4>
                    <p>{description.substring(0, 50)}</p>
                    <div className="product-bottom-details">
                        <div className="product-price"><h4><small>₹{originalPrice}</small>₹{price}</h4></div>
                        <div className="product-links">
                            <IoMdHeartEmpty className="icon" />
                            <IoCartOutline className="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card