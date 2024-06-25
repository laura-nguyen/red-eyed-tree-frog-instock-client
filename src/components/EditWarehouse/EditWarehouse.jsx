import "./EditWarehouse.scss";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditWarehouse = () => {
  const { warehouseId } = useParams();
  const [warehouse, setWarehouse] = useState(null);
  const [formData, setFormData] = useState(null);


  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/warehouses/${warehouseId}`);
        setWarehouse(response.data);
        setFormData({
          warehouseName: response.data.warehouse_name,
          streetAddress: response.data.address,
          city: response.data.city,
          country: response.data.country,
          contactName: response.data.contact_name,
          position: response.data.contact_position,
          phoneNumber: response.data.contact_phone,
          email: response.data.contact_email,
        });
      } catch (error) {
        console.error("Error fetching warehouse data:", error);
      }
    };

    fetchWarehouse();
  }, [warehouseId]);

  if (!warehouse) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
            <input
              className="form__input"
              type="text"
              name="warehouseName"
              id="warehouseName"
              placeholder="Warehouse Name"
              value={warehouse.warehouse_name}
              onChange={handleInputChange}
            
            />
            <h3 className="form__label">Street Address</h3>
            <input
              className="form__input"
              type="text"
              name="streetAddress"
              id="streetAddress"
              placeholder="Street Address"
              value={warehouse.address}
              onChange={handleInputChange}
            />
            <h3 className="form__label">City</h3>
            <input
              className="form__input"
              type="text"
              name="city"
              id="city"
              placeholder="City"
              value={warehouse.city}
              onChange={handleInputChange}
            />
            <h3 className="form__label">Country</h3>
            <input
              className="form__input"
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              value={warehouse.country}
              onChange={handleInputChange}
            />
          </div>
          <hr className="edit-wh__divider edit-wh__divider--vertical" />
          <div className="form__section">
            <h2 className="form__subtitle">Contact Details</h2>
            <h3 className="form__label">Contact Name</h3>
            <input
              className="form__input"
              type="text"
              name="contactName"
              id="contactName"
              placeholder="Contact Name"
              value={warehouse.contact_name}
              onChange={handleInputChange}
            />
            <h3 className="form__label">Position</h3>
            <input
              className="form__input"
              type="text"
              name="position"
              id="position"
              placeholder="Position"
              value={warehouse.contact_position}
              onChange={handleInputChange}
            />
            <h3 className="form__label">Phone Number</h3>
            <input
              className="form__input"
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              value={warehouse.contact_phone}
              onChange={handleInputChange}
            />
            <h3 className="form__label">Email</h3>
            <input
              className="form__input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={warehouse.contact_email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="edit-wh__buttons">
          <Link className="edit-wh__cancel" to={"/warehouses"}>
            Cancel
          </Link>
          <button className="edit-wh__save" type="submit">
            Save
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditWarehouse;
