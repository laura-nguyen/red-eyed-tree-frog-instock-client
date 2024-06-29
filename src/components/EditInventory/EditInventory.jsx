import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import error from "../../assets/icons/error-24px.svg";
import "./EditInventory.scss";

const EditInventory = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [isOutOfStock, setIsOutOfStock] = useState(false);
  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "inStock",
    quantity: "",
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

  useEffect(() => {
    const getSelectOptions = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get(`${apiURL}/categories`),
          axios.get(`${apiURL}/warehouses`),
        ]);

        const categoriesRes = await response1.data;
        const warehousesRes = await response2.data;

        setCategories(categoriesRes);
        setWarehouses(warehousesRes);
      } catch (error) {
        console.log(error);
      }
    };

    getSelectOptions();
  }, []);

  const sanitizeString = (str) => str.trim().toLowerCase();

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await axios.get(`${apiURL}/inventories/${inventoryId}`);
        const warehouse = warehouses.find(
          (w) =>
            sanitizeString(w.warehouse_name) ===
            sanitizeString(res.data.warehouse_name)
        );

        const inventory = {
          item_name: res.data.item_name,
          description: res.data.description,
          category: res.data.category,
          status: res.data.status === "In Stock" ? "inStock" : "outOfStock",
          quantity: res.data.quantity,
          warehouse_id: warehouse ? warehouse.id : "",
        };

        if (res.data.status === "In Stock") {
          setIsOutOfStock(false);
        } else {
          setIsOutOfStock(true);
        }

        setFormData(inventory);
        setInventory(inventory);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };

    fetchInventory();
  }, [inventoryId, warehouses]);

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
    const statusValue = formData["status"];

    Object.keys(formData).forEach((key) => {
      if (key === "quantity") {
        if (statusValue === "inStock" && !formData[key]) {
          newErrors[key] = "This field value should be greater than 0";
        }
      } else if (!formData[key]) {
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

        await axios.put(`${apiURL}/inventories/${inventoryId}`, formData);

        alert("Inventory item updated successfully");
        handleGoBack();
      } catch (error) {
        console.error("Error updating inventory item:", error);
      }
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  if (inventory.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <main className="edit-inventory">
      <div className="edit-inventory__title-bar">
        <Link
          className="edit-inventory__back-link"
          to={`/inventories/${inventoryId}`}
        >
          <img
            className="edit-inventory__back-icon"
            src={backArrow}
            alt="back arrow"
          />
        </Link>
        <h1 className="edit-inventory__heading">Edit Inventory Item</h1>
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
        <div className="edit-inventory__buttons">
          <Link className="link--cancel" onClick={handleGoBack}>
            <button className="button button--cancel">Cancel</button>
          </Link>
          <button className="button" type="submit">
            Save
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditInventory;
