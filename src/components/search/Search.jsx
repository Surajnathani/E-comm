import { IoClose, IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../context/product';

const Search = () => {
    const { setSearchQuery, searchQuery } = useProduct();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== '') {
            navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
        }

    };

    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" placeholder="Search here" autoFocus autoComplete='off' />
                {
                    searchQuery && searchQuery.length ?
                        <button type="submit" className="searchButton">
                            <IoClose className="icon" onClick={() => setSearchQuery("")} />
                        </button>
                        :
                        <button type="submit" className="searchButton">
                            <IoSearchOutline className="icon" />
                        </button>
                }

            </form>
        </div>
    )
}

export default Search