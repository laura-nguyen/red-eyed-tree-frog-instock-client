import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import error from "../../assets/icons/error-24px.svg";
import "./AddInventory.scss";

const API_URL = import.meta.env.VITE_API_URL;

const AddInventory = () => {
  const [categories, setCategories] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [isOutOfStock, setIsOutOfStock] = useState(false);
  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "inStock",
    quantity: "0",
    warehouse_id: "",
  });
  const [errors, setErrors] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    warehouse_id: "",
  });

  const getSelectOptions = async () => {
    try {
      const response1 = await axios.get(`${API_URL}/categories`);
      const response2 = await axios.get(`${API_URL}/warehouses`);
      setCategories(response1.data);
      setWarehouses(response2.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectOptions();
  }, []);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value === "outOfStock") {
      setIsOutOfStock(true);
    } else {
      setIsOutOfStock(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        formData["quantity"] =
          formData["status"] === "inStock" ? formData["quantity"] : "0";
        formData["status"] =
          formData["status"] === "inStock" ? "In Stock" : "Out of Stock";

        const response = await axios.post(`${API_URL}/inventories`, formData);
        alert("Inventory item added successfully");
        navigate("/inventories");
      } catch (error) {
        console.error("Error adding inventory item:", error);
      }
    }
  };

  return (
    <main className="add-inventory">
      <div className="add-inventory__title-bar">
        <Link className="add-inventory__back-link" to={"/inventories"}>
          <img
            className="add-inventory__back-icon"
            src={backArrow}
            alt="back arrow"
          />
        </Link>
        <h1 className="add-inventory__heading">Add New Inventory Item</h1>
      </div>
      <hr className="divider" />

      <form className="form" onSubmit={handleSubmit}>
        <div className="form__sections">
          <div className="form__section form__section--left">
            <h2 className="form__subtitle">Item Details</h2>
            <h3 className="form__label">Item Name</h3>
            <input
              className={`form__input ${
                errors.item_name ? "form__input error" : ""
              }`}
              type="text"
              name="item_name"
              id="item_name"
              placeholder="Item Name"
              value={formData.item_name}
              onChange={handleInputChange}
            />
            {errors.item_name && (
              <p className="error-message">
                <img className="error-message--icon" src={error} alt="" />{" "}
                {errors.item_name}
              </p>
            )}

            <h3 className="form__label">Description</h3>
            <textarea
              className={`form__textarea ${
                errors.description ? "form__textarea error" : ""
              }`}
              name="description"
              id="description"
              placeholder="Please enter a brief item description..."
              value={formData.description}
              onChange={handleInputChange}
              row="2"
            ></textarea>
            {errors.description && (
              <p className="error-message">
                <img className="error-message--icon" src={error} alt="" />{" "}
                {errors.description}
              </p>
            )}

            <h3 className="form__label">Category</h3>
            <div className="select-wrapper">
              <select
                className={`form__select ${
                  errors.category ? "form__select error" : ""
                }`}
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="" disabled hidden>
                  Please select
                </option>
                {categories &&
                  categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>
            {errors.category && (
              <p className="error-message">
                <img className="error-message--icon" src={error} alt="" />{" "}
                {errors.category}
              </p>
            )}
          </div>
          <hr className="divider divider--vertical" />

          <div className="form__section">
            <h2 className="form__subtitle">Item Availability</h2>
            <h3 className="form__label">Status</h3>
            <div className="form__radio-control">
              <div className="form__radio-wrapper">
                <input
                  className="status-radio"
                  id="inStock"
                  type="radio"
                  name="status"
                  value="inStock"
                  checked={formData.status === "inStock"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="inStock" className="form__radio-label">
                  In stock
                </label>
              </div>
              <div className="form__radio-wrapper">
                <input
                  className="status-radio"
                  id="outOfStock"
                  type="radio"
                  name="status"
                  value="outOfStock"
                  checked={formData.status === "outOfStock"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="outOfStock" className="form__radio-label">
                  Out of stock
                </label>
              </div>
            </div>

            {!isOutOfStock && (
              <>
                <h3 className="form__label">Quantity</h3>
                <input
                  className={`form__input form__input--quantity ${
                    errors.quantity ? "form__input error" : ""
                  }`}
                  type="text"
                  name="quantity"
                  id="quantity"
                  placeholder="0"
                  value={formData.quantity}
                  onChange={handleInputChange}
                />
                {errors.quantity && (
                  <p className="error-message">
                    <img className="error-message--icon" src={error} alt="" />{" "}
                    {errors.quantity}
                  </p>
                )}
              </>
            )}

            <h3 className="form__label">Warehouse</h3>
            <div className="select-wrapper">
              <select
                className={`form__select ${
                  errors.warehouse_id ? "form__select error" : ""
                }`}
                name="warehouse_id"
                value={formData.warehouse_id}
                onChange={handleInputChange}
              >
                <option value="" disabled hidden>
                  Please select
                </option>
                {warehouses &&
                  warehouses.map((warehouse) => (
                    <option key={warehouse.id} value={warehouse.id}>
                      {warehouse.warehouse_name}
                    </option>
                  ))}
              </select>
            </div>
            {errors.warehouse_id && (
              <p className="error-message">
                <img className="error-message--icon" src={error} alt="" />{" "}
                {errors.warehouse_id}
              </p>
            )}
          </div>
        </div>
        <div className="add-inventory__buttons">
          <Link className="link--cancel" to={"/inventories"}>
            <button className="button button--cancel">Cancel</button>
          </Link>
          <button className="button" type="submit">
            + Add Item
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddInventory;
