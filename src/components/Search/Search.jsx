import "./Search.scss";
import searchIcon from "../../assets/icons/search-24px.svg";

const Search = () => {
  return (
    <section className="search">
        <form className="search__formSec">
            <div className="search__control">
                <input
                className="search__input"
                type="text"
                name="search"
                placeholder="Search..."
                />
                <img className="search__icon" src={searchIcon} alt="Search Icon" />
            </div>
        <button className="button button--search">+ Add New Item</button>
        </form>
    </section>
  );
};

export default Search;