import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
import Search from "../../components/Search/Search";
import "./Inventory.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/PopUp/PopUp";

const Inventory = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const [inventories, setInventories] = useState([]);
  const [deleteInventoryName, setDeleteInventoryName] = useState("");
  const [deleteInventoryId, setDeleteInventoryId] = useState("");
  useEffect(() => {
    const getAllInventories = async () => {
      try {
        const response = await axios.get(`${API_URL}/inventories`);
        setInventories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllInventories();
  }, []);
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const DeleteInventory = async (e) => {
    e.preventDefault();
    try {
      console.log(`${API_URL}/inventories/${deleteInventoryId}`);
      console.log({ deleteInventoryId });
      const result = await axios.delete(
        `${API_URL}/inventories/${deleteInventoryId}`
      );
      setInventories(
        inventories.filter((item) => item.id !== deleteInventoryId)
      );
    } catch (e) {
      console.log(e);
    }
  };
  const showPopup = (inventoryName, id) => {
    setIsPopupVisible(true);
    setDeleteInventoryName(inventoryName);
    setDeleteInventoryId(id);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  const handleDelete = (e) => {
    DeleteInventory(e);
    hidePopup();
  };
  return (
    <main className="main">
      <Header />
      <section className="inventory">
        <div className="inventory__title-bar">
          <h1 className="inventory__heading">Inventory</h1>
          {!isPopupVisible && <Search />}
          <NavLink to="/inventories/add">
            <button className="button button--search">+ Add New Item</button>
          </NavLink>
        </div>
        <hr className="divider divider--hide-big" />
        <InventoryList openModal={showPopup} inventories={inventories} />
        {isPopupVisible && (
          <Popup
            handleDelete={handleDelete}
            closePopup={closePopup}
            question={`Delete ${deleteInventoryName} inventory item?`}
            description={`Please confirm that you'd like to delete ${deleteInventoryName} from the  inventory list. You won't be able to undo this action.`}
          />
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Inventory;
