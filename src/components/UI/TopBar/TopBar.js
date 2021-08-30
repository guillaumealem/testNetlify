import React from "react";

const topBar = () => {
  return (
    <div className="top-bar pt-1 pb-1 text-light">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="d-flex pt-2 pb-2">
            <div className="d-flex align-item-center mr-3">
              <i className="fas fa-phone-alt mr-2" />
              <small>05 49 24 96 88</small>
            </div>
            <div className="d-flex align-item-center mr-3">
              <i className="fas fa-clock mr-2" />
              <small>Horaires : Lundi - vendredi : 8:00 - 20:00</small>
            </div>
            <div className="d-flex align-item-center">
              <i className="fas fa-map-marker-alt mr-2" />
              <small>14 rue Henri Dunan, 79160 Villiers-en-Plaine</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default topBar;
