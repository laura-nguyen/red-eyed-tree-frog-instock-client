import "./Header.scss"
import logo from "../../assets/logo/InStock-Logo_1x.png"
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header__background">
      <div className="header">
      <Link to={"/warehouses"} className="header__logo">
        <img src={logo} alt="instock logo" />
      </Link>
      <nav className="nav">
        <NavLink className={({ isActive }) => "nav__item" + (isActive ? " nav__item--active" : "")} to={"/warehouses"}>Warehouses</NavLink>
        <NavLink className={({ isActive }) => "nav__item" + (isActive ? " nav__item--active" : "")} to={"/inventories"}>Inventory</NavLink>
      </nav>
      </div>
    </header>
  )
}

export default Header;