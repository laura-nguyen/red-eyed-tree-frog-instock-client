import "./Search.scss";
import searchIcon from "../../assets/icons/search-24px.svg";

const Search = () => {
  return (
    <form className="search">
      <div className="search__control">
        <input
          className="search__input"
          type="text"
          name="search"
          placeholder="Search..."
        />
        <img className="search__icon" src={searchIcon} alt="Search Icon" />
      </div>
    </form>
  );
};

export default Search;
