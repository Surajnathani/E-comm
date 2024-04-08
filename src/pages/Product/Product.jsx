import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Filter from '../../components/filter/Filter';
import { useProduct } from "../../context/product";
import './product.css';

const Product = () => {
    const { filter } = useProduct();

    return (
        <div className='sectionContainer headerPages'>
            <div className="headerSection">
                <h3>Products</h3>
                <p><Link to="/">home</Link> / <Link to="/products">products</Link></p>
            </div>
            <div className="productLists">
                <div className="productFilter">
                    <Filter />
                </div>
                {
                    filter && filter.length ?
                        <div className="gridFourColumn productList gridColumnWidth">
                            {
                                filter.map(product => (
                                    <Card key={product.id} product={product} />
                                ))
                            }
                        </div>
                        :
                        <div className="productList">
                            <h1 className="empty">No Item found</h1>
                        </div>
                }
            </div>
        </div>
    )
}

export default Product;
