import { IoClose } from "react-icons/io5";
import Card from "../../components/card/Card"
import { useProduct } from "../../context/product";
import './wishlist.css'
import { Link } from "react-router-dom";

const Wishlist = () => {
    const { wishItems, removeProductWishlist } = useProduct();

    return (
        wishItems && wishItems.length ?
            <div className='sectionContainer headerPages'>
                <div className="headerSection">
                    <h3>Wishlist Product</h3>
                    <p><Link to="/">home</Link> / <Link to="/wishlist">wishlist</Link></p>
                </div>
                <div className="gridFourColumn gridColumnWidth">
                    {wishItems.map(product => (
                        <div key={product.id} className="wishlist">
                            <Card product={product} />
                            <span className="removeIcon closeWishList"><IoClose onClick={() => removeProductWishlist(product.id)} className="icon" /></span>
                        </div>
                    ))}
                </div>
            </div>
            : <h1 className='empty'>No wishlist product</h1>
    )
}

export default Wishlist