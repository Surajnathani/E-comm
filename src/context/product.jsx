import { createContext, useContext, useEffect, useState } from "react";
import { data } from '../../data';
import { toast } from 'react-toastify';

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [wishItems, setWishItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brand, setBrand] = useState([]);
    const [maxPrice, setMaxPrice] = useState(null);

    const [filter, setFilter] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");

    const [searchQuery, setSearchQuery] = useState("");

    const getData = async () => {
        // const url = 'https://dummyjson.com/products';
        try {
            // const response = await fetch(url);
            // const result = await response.json();
            const result = await data;
            setProductData(result.products);
            setFilter(result.products);

            const extractedCategories = Array.from(new Set(result.products.map(product => product.category)));
            const extractedBrands = Array.from(new Set(result.products.map(product => product.brand)));
            const maxPrice = Math.max(...result.products.map(product => product.price));


            setCategories(extractedCategories);
            setBrand(extractedBrands);
            setMaxPrice(maxPrice);
        } catch (error) {
            console.error(error);
        }
    };

    const addToCart = (product) => {
        try {
            setCartItems(prevCartItems => {
                let updatedCart;
                if (!Array.isArray(prevCartItems)) {
                    prevCartItems = [];
                }
                const existingProductIndex = prevCartItems.findIndex(item => item.id === product.id);
                if (existingProductIndex !== -1) {
                    updatedCart = prevCartItems.map((item, index) => {
                        if (index === existingProductIndex) {
                            return { ...item, quantity: item.quantity + product.quantity };
                        }
                        return item;
                    });
                } else {
                    updatedCart = [...prevCartItems, { ...product }];
                }
                localStorage.setItem('cartItems', JSON.stringify(updatedCart));
                toast.success("item added to cart");
                return updatedCart;
            });
        } catch (error) {
            toast.error("failed to add item to cart");
        }
        // setCartItems([...cartItems, product]);
        // localStorage.setItem('cartItems', JSON.stringify([...cartItems, product]));
    };

    const addToWishList = (product) => {
        try {
            const alreadyInWishlist = wishItems.some(item => item.id === product.id);
            if (!alreadyInWishlist) {
                setWishItems([...wishItems, product]);
                localStorage.setItem('wishItems', JSON.stringify([...wishItems, product]));
                toast.success("item added to wishlist")
            } else {
                toast.warning("item is already added")
            }
        } catch (error) {
            toast.success("failed to add item to wishlist")
        }
    };

    const removeProduct = (productId) => {
        try {
            const updatedItems = cartItems.filter(item => item.id !== productId);
            setCartItems(updatedItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            toast.success("removed successfully")
        } catch (error) {
            toast.success("removed failed")
        }
    }

    const removeProductWishlist = (productId) => {
        const updatedItems = wishItems.filter(item => item.id !== productId);
        setWishItems(updatedItems);
        localStorage.setItem('wishItems', JSON.stringify(updatedItems));
    }

    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        const storedWishlist = localStorage.getItem('wishItems');

        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
        if (storedWishlist) {
            setWishItems(JSON.parse(storedWishlist));
        }
    }, []);

    useEffect(() => {
        const clearDataTimeout = setTimeout(() => {
            localStorage.removeItem('cartItems');
            localStorage.removeItem('wishItems');
        }, 2 * 24 * 60 * 60 * 1000);

        return () => clearTimeout(clearDataTimeout);
    }, []);

    const filteredProducts = () => {
        let filteredProduct = productData;

        if (selectedCategory) {
            filteredProduct = filteredProduct.filter(product => product.category === selectedCategory);
        }

        if (selectedBrand) {
            filteredProduct = filteredProduct.filter(product => product.brand === selectedBrand);
        }

        if (selectedPrice) {
            filteredProduct = filteredProduct.filter(product => product.price <= parseInt(selectedPrice));
        }

        if (selectedSize) {
            filteredProduct = filteredProduct.filter(product => product.size === selectedSize);
        }

        if (searchQuery) {
            filteredProduct = filteredProduct.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        setFilter(filteredProduct);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        filteredProducts();
    }, [selectedCategory, selectedBrand, selectedPrice, selectedSize, searchQuery]);


    const cartLength = cartItems.length ? cartItems.length : 0;
    return (
        <ProductContext.Provider value={{
            productData,
            addToCart,
            cartItems,
            addToWishList,
            wishItems,
            removeProduct,
            removeProductWishlist,
            categories,
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

            filter,
            filteredProducts,

            searchQuery,
            setSearchQuery,
            cartLength
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    const productContextValue = useContext(ProductContext);
    if (!productContextValue) {
        throw new Error("useProduct used outside of Product Provider");
    }
    return productContextValue;
};
