import React from "react";

import Section from "../../../HOC/Section";
import aboutImage from "../../../assets/img/cab.jpg";

const leCabinet = () => {
  return (
    <Section id="leCab">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Le </span>Cabinet
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            Le cabinet se situe à Villiers en plaine au 14 rue Henri Dunan.
            <br />
            Il est ouvert du lundi au vendredi de 8:00 à 20:00
          </h6>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImage">
                <img src={aboutImage} alt="about company" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <h3 className="about-title">A propos du cabinet</h3>
              <div className="about-description">
                <p>
                  Le cabinet est un pavillon de 200m² climatisé, accessible
                  handicapé.
                </p>
                <p>
                  Nous avons 5 salles individuelles de travail équipés de tables
                  électriques pour prendre en charge nos patients
                </p>
                <p>
                  Le cabinet est également équipé d'un plateau technique avec
                  vélo, vélo eliptique, tapis de course ...
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-4 mb-3">
              <div className="aboutImage">
                <img src={aboutImage} alt="about company" />
              </div>
            </div>
            <div className="col-md-12 col-lg-4 mb-3">
              <div className="aboutImage">
                <img src={aboutImage} alt="about company" />
              </div>
            </div>
            <div className="col-md-12 col-lg-4 mb-3">
              <div className="aboutImage">
                <img src={aboutImage} alt="about company" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default leCabinet;
