import "./WarehouseDetails.scss";

const WarehouseDetails = () => {
  return (
    <main className="wrapper">
      <div className="header">
        <button className="header__button--back"></button>
        <h1 className="header__name">Washington</h1>
        <button className="header__button--edit"></button>
      </div>
      <div className="details">
        <div className="details__address">
          <h4>Warehouse Address:</h4>
          <p>Washington, USA</p>
        </div>
        <div className="details__contact">
          <div className="details__contact-name">
            <h4>Contact Name:</h4>
            <p>Graeme Lyon</p>
            <p>Warehouse Manager</p>
          </div>
          <div className="details__contact__info">
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
