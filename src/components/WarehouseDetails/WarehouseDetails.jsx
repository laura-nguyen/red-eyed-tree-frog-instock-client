import "./WarehouseDetails.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

const WarehouseDetails = () => {
  return (
    <main className="wrapper">
      <div className="wh-details__header">
        <Link className="wh-details__header-btn--back" to={"/warehouses"}>
          <img
            className="wh-details__header-icon--back"
            src={backArrow}
            alt="back arrow"
          />
        </Link>
        <h1 className="edit-wh__title">Washington</h1>
        <button className="edit-wh__header-btn--edit"></button>
      </div>
      <hr className="edit-wh__divider" />

      <div className="wh-details__wrapper">
        <div className="wh-details__address">
          <h4>Warehouse Address:</h4>
          <p>Washington, USA</p>
        </div>
        <div className="wh-etails__contact">
          <div className="wh-details__contact-name">
            <h4>Contact Name:</h4>
            <p>Graeme Lyon</p>
            <p>Warehouse Manager</p>
          </div>
          <div className="wh-details__contact-info">
            <h4>Contact Information:</h4>
            <p>453454353443</p>
            <p>glyon@instock.com</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WarehouseDetails;
