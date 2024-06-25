import "./Header.scss"
// import logo from "../../assets/logo/InStock-Logo_1x.png"
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/warehouses"} className="header__logo">
        <img src="" alt="instock logo" />
      </Link>
      <nav className="nav">
        <NavLink className="nav__item" to={"/warehouses"}>Warehouses</NavLink>
        <NavLink className="nav__item" to={"/inventories"}>Inventory</NavLink>
      </nav>
    </header>
  )
}

export default Header;