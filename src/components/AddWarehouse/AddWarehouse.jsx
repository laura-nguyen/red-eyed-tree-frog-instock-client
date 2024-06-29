import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import backArrow from "../../assets/icons/arrow_back-24px.svg";
import error from "../../assets/icons/error-24px.svg";

import "./AddWarehouse.scss";

const AddWarehouse = () => {
  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });
  const [errors, setErrors] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateContactPhone = (contactPhone) => {
    const re = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    return re.test(String(contactPhone));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (
      formData.contact_phone &&
      !validateContactPhone(formData.contact_phone)
    ) {
      newErrors.contact_phone = "Invalid phone number format";
    }

    if (formData.contact_email && !validateEmail(formData.contact_email)) {
      newErrors.contact_email = "Invalid email format";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(`${apiUrl}/warehouses`, formData);
        alert("Warehouse added successfully");
        navigate("/warehouses");
      } catch (error) {
        console.error("Error adding warehouse:", error);
      }
    }
  };

  return (
    <main className="add-wh">
      <div className="add-wh__header">
        <Link className="add-wh__back-link" to={"/warehouses"}>
          <img className="add-wh__back-icon" src={backArrow} alt="back arrow" />
        </Link>
        <h1 className="add-wh__title">Add New Warehouse</h1>
      </div>
      <hr className="add-wh__divider" />
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__sections">
          <div className="form__section">
            <h2 className="form__subtitle">Warehouse Details</h2>
            <h3 className="form__label">Warehouse Name</h3>
            <input
              className={`form__input ${
                errors.warehouse_name ? "form__input--error" : ""
              }`}
              type="text"
              name="warehouse_name"
              id="warehouse_name"
              placeholder="Warehouse Name"
              value={formData.warehouse_name}
              onChange={handleInputChange}
            />
            {errors.warehouse_name && (
              <p className="form__error">
                <img className="form__error--icon" src={error} alt="" />{" "}
                {errors.warehouse_name}
              </p>
            )}

            <h3 className="form__label">Street Address</h3>
            <input
              className={`form__input ${
                errors.address ? "form__input--error" : ""
              }`}
              type="text"
              name="address"
              id="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleInputChange}
            />
            {errors.address && (
              <p className="form__error">
                <img className="form__error--icon" src={error} alt="" />{" "}
                {errors.address}
              </p>
            )}

            <h3 className="form__label">City</h3>
            <input
              className={`form__input ${
                errors.city ? "form__input--error" : ""
              }`}
              type="text"
              name="city"
              id="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
            />
            {errors.city && (
              <p className="form__error">
                <img className="form__error--icon" src={error} alt="" />{" "}
                {errors.city}
              </p>
            )}

            <h3 className="form__label">Country</h3>
            <input
              className={`form__input ${
                errors.country ? "form__input--error" : ""
              }`}
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
            />
            {errors.country && (
              <p className="form__error">
                <img className="form__error--icon" src={error} alt="" />{" "}
                {errors.country}
              </p>
            )}
          </div>
          <hr className="add-wh__divider add-wh__divider--vertical" />
          <div className="form__section">
            <h2 className="form__subtitle">Contact Details</h2>
            <h3 className="form__label">Contact Name</h3>
            <input
              className={`form__input ${
                errors.contact_name ? "form__input--error" : ""
              }`}
              type="text"
              name="contact_name"
              id="contact_name"
              placeholder="Contact Name"
              value={formData.contact_name}
              onChange={handleInputChange}
            />
            {errors.contact_name && (
              <p className="form__error">
                <img className="form__error--icon" src={error} alt="" />{" "}
                {errors.contact_name}
              </p>
            )}
            <h3 className="form__label">Position</h3>
            <input
              className={`form__input ${
                errors.contact_position ? "form__input--error" : ""
              }`}
              type="text"
              name="contact_position"
              id="contact_position"
              placeholder="Position"
              value={formData.contact_position}
              onChange={handleInputChange}
            />
            {errors.contact_position && (
              <p className="form__error">
                <img className="form__error--icon" src={error} alt="" />{" "}
                {errors.contact_position}
              </p>
            )}

            <h3 className="form__label">Phone Number</h3>
            <input
              className={`form__input ${
                errors.contact_phone ? "form__input--error" : ""
              }`}
              type="tel"
              name="contact_phone"
              id="contact_phone"
              placeholder="Phone Number"
              value={formData.contact_phone}
              onChange={handleInputChange}
            />
            {errors.contact_phone && (
              <p className="form__error">
                <img className="form__error--icon" src={error} alt="" />{" "}
                {errors.contact_phone}
              </p>
            )}

            <h3 className="form__label">Email</h3>
            <input
              className={`form__input ${
                errors.contact_email ? "form__input--error" : ""
              }`}
              type="email"
              name="contact_email"
              id="contact_email"
              placeholder="Email"
              value={formData.contact_email}
              onChange={handleInputChange}
            />
            {errors.contact_email && (
              <p className="form__error">
                <img className="form__error--icon" src={error} alt="" />{" "}
                {errors.contact_email}
              </p>
            )}
          </div>
        </div>
        <div className="add-wh__buttons">
          <Link className="add-wh__cancel" to={"/warehouses"}>
            Cancel
          </Link>
          <button className="add-wh__save" type="submit">
            + Add Warehouse
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddWarehouse;
