import { Slider } from 'rsuite';
import './filter.css';
import { useProduct } from '../../context/product';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import { useState } from 'react';

const Filter = () => {
    const { categories,
        brand,
        maxPrice,

        selectedCategory,
        selectedBrand,
        selectedSize,
        selectedPrice,

        setSelectedCategory,
        setSelectedBrand,
        setSelectedSize,
        setSelectedPrice,
    } = useProduct();

    const sizes = ["Small", "Medium", "Large", "Extra Large", "Extra Extra Large"];

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleClearFilters = () => {
        setSelectedCategory("");
        setSelectedBrand("");
        setSelectedSize("");
        setSelectedPrice("");
    };

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleMenu = () => {
        setIsFilterOpen(prevState => !prevState);
    };

    return (
        <div className="filterSection">
            <div className='filterHeader'>
                <h4>Filter</h4>
                <div className='FilterArrow'>
                    <button onClick={handleClearFilters}>clear all</button>
                    <div className='filterArrowIcons'>
                        {
                            isFilterOpen ?
                                <IoIosArrowDropupCircle className="icon" onClick={toggleMenu} />
                                :
                                <IoIosArrowDropdownCircle className='icon' onClick={toggleMenu} />
                        }
                    </div>
                </div>
            </div>
            <div className={isFilterOpen ? "active" : "notActive"}>
                <div className='filterBox'>
                    <h4>Categories</h4>
                    <div className='filterList'>
                        {categories.map((category, index) => (
                            <div key={index} className='filterLabel'>
                                <input type="radio" id={category} name="Categories" value={category} className="custom-control-input" checked={selectedCategory === category} onChange={handleCategoryChange} />
                                <label className="custom-control-label" htmlFor={category}>{category}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='filterBox'>
                    <h4>Price</h4>
                    <Slider
                        progress
                        defaultValue={parseInt(maxPrice)}
                        max={parseInt(maxPrice)}
                        onChange={value => {
                            setSelectedPrice(value);
                        }}
                    />
                    <div>
                        ₹{selectedPrice}
                    </div>
                </div>
                <div className='filterBox'>
                    <h4>Brand</h4>
                    <div className='filterList'>
                        {brand.map((brand) => (
                            <div key={brand} className='filterLabel'>
                                <input type="radio" id={brand} name="Brand" value={brand} className="custom-control-input" checked={selectedBrand === brand} onChange={handleBrandChange} />
                                <label className="custom-control-label" htmlFor={brand}>{brand}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='filterBox'>
                    <h4>Size</h4>
                    <div className='filterList'>
                        {sizes.map((size) => (
                            <div key={size} className='filterLabel'>
                                <input type="radio" id={size} name="Size" value={size} className="custom-control-input" checked={selectedSize === size}
                                    onChange={handleSizeChange} />
                                <label className="custom-control-label" htmlFor={size}>{size}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
