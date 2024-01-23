
import './SearchForm.scss';
import searchIcon from '../assets/search-icon.png'

const SearchForm=()=>{
    return(
        <div className="search-form">
            <div className="input">
                <img src={searchIcon} alt={searchIcon} />
                <input type="search" placeholder='Search...' />
            </div>
        </div>
    )
}

export default SearchForm;