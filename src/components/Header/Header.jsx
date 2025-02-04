import "./Header.scss";
import logo from "../../assets/logo/InStock-Logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header__background">
      <div className="header">
        <Link to={"/warehouses"} className="header__logo">
          <img src={logo} alt="instock logo" />
        </Link>
        <nav className="nav">
          <NavLink
            className={({ isActive }) =>
              "nav__item" +
              (isActive || location.pathname === "/"
                ? " nav__item--active"
                : "")
            }
            to={"/warehouses"}
          >
            Warehouses
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav__item" + (isActive ? " nav__item--active" : "")
            }
            to={"/inventories"}
          >
            Inventory
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
