import "./WarehouseDetails.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-20px-white.svg";

const WarehouseDetails = ({ warehouseDetails }) => {
  const {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = warehouseDetails;

  return (
    <main className="wh-details__wrapper">
      <div className="wh-details__header">
        <div className="wh-details__header-text-wrapper">
          <Link className="wh-details__header-btn--back" to={"/warehouses"}>
            <img
              className="wh-details__header-icon--back"
              src={backArrow}
              alt="back arrow"
            />
          </Link>
          <h1 className="wh-details__title">{warehouse_name}</h1>
        </div>
        <button className="wh-details__header-btn--edit-mobile">
          <img src={editIcon} alt="edit icon" />
        </button>
        <button className="wh-details__header-btn--edit-tablet">
          <img src={editIcon} alt="edit icon" />
          Edit
        </button>
      </div>

      <div className="wh-details__info">
        <div className="wh-details__address">
          <h4 className="wh-details__label">Warehouse Address:</h4>
          <p className="wh-details__text">{address},</p>
          <p className="wh-details__text">
            {city}, {country}
          </p>
        </div>
        <div className="wh-details__contact">
          <div className="wh-details__contact-name">
            <h4 className="wh-details__label">Contact Name:</h4>
            <p className="wh-details__text">{contact_name}</p>
            <p className="wh-details__text">{contact_position}</p>
          </div>
          <div className="wh-details__contact-info">
            <h4 className="wh-details__label">Contact Information:</h4>
            <p className="wh-details__text">{contact_phone}</p>
            <p className="wh-details__text">{contact_email}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WarehouseDetails;
