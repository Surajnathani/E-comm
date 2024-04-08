import './home.css'
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import Card from '../../components/card/Card';
import Testimonial from '../../components/Testimonial/Testimonial';
import { useProduct } from '../../context/product';
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const { productData } = useProduct();
    const navigate = useNavigate();

    return (
        <div className="homeMainContainer">
            <div className="homeContainer homeSectionBgImage1">
                <div className="gridTwoColumn sectionContainer homeSection">
                    <div className='homeTitle'>
                        <div>
                            <p>Expression Of Individuals</p>
                            <h1>Fashion Is Nothing But Choise</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores maxime dignissimos eveniet ullam ut ipsum aliquam molestias sint consectetur reiciendis!</p>
                        </div>
                        <button className='button' onClick={() => navigate("/products")}>Show Now</button>
                    </div>
                </div>
            </div>
            <div className="sectionContainer">
                <div className="collectionsContainer">
                    <div className="collections">
                        <div className='collectionLeft'>
                            <h2>Mega sale</h2>
                        </div>
                        <div className='collectionRight'>
                            <div className="collectionsSubRight">
                                <div className='collectionSubRightLeft'>
                                    <h2>Trendy<br />collection</h2>
                                </div>
                                <div className='collectionSubRightRight'>
                                    <h2>60% off</h2>
                                </div>
                            </div>
                            <div className="collectionSubLeft">
                                <h2>Summer Collection</h2>
                                <p>Best collection for you</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sectionContainer'>
                <div className="gridThreeColumn">
                    <div className='supportCards'>
                        <div className='supportIcons'>
                            <MdOutlineLocalShipping className='bigIcon' />
                        </div>
                        <div>
                            <p>Free Shipping</p>
                            <p>Free Shipping on orders over $99</p>
                        </div>
                    </div>
                    <div className='supportCards'>
                        <div className='supportIcons'>
                            <BiSupport className='bigIcon' />
                        </div>
                        <div>
                            <p>Online support</p>
                            <p>Online support 24x7 hours</p>
                        </div>
                    </div>
                    <div className='supportCards'>
                        <div className='supportIcons'>
                            <GiMoneyStack className='bigIcon' />
                        </div>
                        <div>
                            <p>Money Return</p>
                            <p>Back guarantee under 5 days</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sectionContainer featuredProduct'>
                <h2>Featured Product</h2>
                {
                    productData && productData.length ?
                        <div className="gridFourColumn gridColumnWidth">
                            {productData.slice(0, 8).map(product => (
                                <Card key={product.id} product={product} />
                            ))}
                        </div>
                        : null
                }
            </div>
            <Link to="/products">
                <div className="homeContainer homeSectionBgImage2">
                    <div className="gridTwoColumn sectionContainer homeSection">
                        <div className='hide'>
                        </div>
                        <div className='fashion'>
                            <h2><span>50%</span> OFF</h2>
                            <h1>Comercio Fashion</h1>
                            <p>Fashion Clothes</p>
                        </div>
                    </div>
                </div>
            </Link>
            <div className='sectionContainer featuredProduct'>
                <h2>New Product</h2>
                {
                    productData && productData.length ?
                        <div className="gridFourColumn gridColumnWidth">
                            {productData.slice(8, 12).map(product => (
                                <Card key={product.id} product={product} />
                            ))}
                        </div>
                        : null
                }
            </div>
            <div className="homeContainer homeSectionBgImage3">
                <div className="gridTwoColumn sectionContainer homeSection">
                    <div className='homeTitle'>
                        <div className='aboutTitle'>
                            <p>About us</p>
                            <h2>Best Brand Best Quality</h2>
                            <br />
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form words.</p>
                            <br />
                            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Inter net. It uses a dictionary of over 200 Latin words.</p>
                        </div>
                    </div>
                    <div className='hide'>
                    </div>
                </div>
            </div>
            <div className='sectionContainer featuredProduct'>
                <h2>Happy customers</h2>
                <Testimonial />
            </div>
        </div>
    )
}

export default Home