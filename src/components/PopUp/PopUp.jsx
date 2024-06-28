import React from "react";
import "./PopUp.scss";
import popupIcon from "../../assets/icons/close-24px.svg";

const Popup = ({ handleDelete, closePopup, warehouseName, warehouseId }) => {
  return (
    <div className="popup__overlay">
      <div className="popup__content">
        <section className="popup__sec">
          <div className="popup__iconDiv">
            <img onClick={closePopup} src={popupIcon} alt="cancel image" />
          </div>
          <div className="popup__question">
            Delete {warehouseName} warehouse?
          </div>
          <p className="popup__description">
            Please confirm that you'd like to delete the {warehouseName} from
            the list of warehouses.You wont't be able to undo this action.
          </p>
        </section>
        <div className="popup__buttonDiv">
          <button onClick={closePopup} className="popup__cancelBtn">
            Cancel
          </button>
          <button onClick={handleDelete} className="popup__popupBtn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
