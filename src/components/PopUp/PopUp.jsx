import React from "react";
import "./PopUp.scss";
import popupIcon from "../../assets/icons/close-24px.svg";

const Popup = ({ handleDelete, closePopup, question, description }) => {
  return (
    <div className="popup__overlay">
      <div className="popup__content">
        <section className="popup__sec">
          <div className="popup__iconDiv">
            <img onClick={closePopup} src={popupIcon} alt="cancel image" />
          </div>
          <div className="popup__question">{question}</div>
          <p className="popup__description">{description}</p>
        </section>
        <div className="popup__buttonDiv">
          <div className="popup__cancelBtnDiv">
            <button onClick={closePopup} className="popup__cancelBtn">
              Cancel
            </button>
          </div>
          <div className="popup__deleteBtnDiv">
            <button onClick={handleDelete} className="popup__popupBtn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
