import "./EditWarehouse.scss";
import { Link } from "react-router-dom";

const EditWarehouse = () => {
  return (
    <main className="edit-wh">
      <div className="edit-wh__header">
        <Link className="edit-wh__back-link" to={"/warehouses"}>
        <img className="edit-wh__back-icon" src="" alt="" />
        </Link>
        <h1 className="edit-wh__title">Edit Warehouse</h1>
      </div>
      <hr className="edit-wh__divider" />
      <form className="form" action="">
        <div className="form__sections">
        <div className="form__section">
            <h2 className="form__subtitle">Warehouse Details</h2>
          <h3 className="form__label">Warehouse Name</h3>
          <input className="form__input" type="text" name="warehouseName" id="warehouseName" placeholder="Warehouse Name" />
          <h3 className="form__label">Street Address</h3>
          <input className="form__input" type="text" name="streetAddress" id="streetAddress" placeholder="Street Address" />
          <h3 className="form__label">City</h3>
          <input className="form__input" type="text" name="city" id="city" placeholder="City" />
          <h3 className="form__label">Country</h3>
          <input className="form__input" type="text" name="country" id="country" placeholder="Country" />
        </div>
        <hr className="edit-wh__divider edit-wh__divider--vertical" />
        <div className="form__section">
            <h2 className="form__subtitle">Contact Details</h2>
          <h3 className="form__label">Contact Name</h3>
          <input className="form__input" type="text" name="contactName" id="contactName" placeholder="Contact Name" />
          <h3 className="form__label">Position</h3>
          <input className="form__input" type="text" name="position" id="position" placeholder="Position" />
          <h3 className="form__label">Phone Number</h3>
          <input className="form__input" type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
          <h3 className="form__label">Email</h3>
          <input className="form__input" type="email" name="email" id="email" placeholder="Email" />
        </div>
        </div>
        <div className="edit-wh__buttons">
            <Link className="edit-wh__cancel" to={"/warehouses"}>Cancel</Link>
            <button className="edit-wh__save" type="submit">Save</button>
        </div>
      </form>
    </main>
  );
};

export default EditWarehouse;
