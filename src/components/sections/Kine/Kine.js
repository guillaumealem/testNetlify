import React from "react";

import Section from "../../../HOC/Section";

import blogImage1 from "../../../assets/img/julien.jpg";
import imgCeline from "../../../assets/img/celine.jpg";
import imgMarine from "../../../assets/img/marine.jpg";
import imgChloe from "../../../assets/img/chloe.jpg";

const Kine = () => {
  return (
    <Section id="kine">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Les </span>Kinés
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            Nous sommes actuellement 4 kinés. <br />
            Nous continuons constamment à nous former pour vous proposer la
            meilleure prise en charge possible.
          </h6>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-lg-6 mb-3">
              <div className="card rounded-0">
                <img src={blogImage1} className="card-img-top" alt="Blog 1" />
                <div className="card-body">
                  <h5 className="card-title">Julien Brunot</h5>
                  <p className="card-text">
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur.... Exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo. cillum dolore
                    eu fugiat nulla pariatur commodo consequat.cillum dolore eu
                    fugiat pariatur.... Exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo. cillum dolore eu fugiat nulla
                    pariatur commodo consequat.cillum dolore eu fugiat
                    pariatur.... Exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo. cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href="#!" className="btn btn-sm btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="card rounded-0">
                <img src={imgCeline} className="card-img-top" alt="Blog 1" />
                <div className="card-body">
                  <h5 className="card-title">Mouzille Céline</h5>
                  <p className="card-text">
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href="#!" className="btn btn-sm btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="card rounded-0">
                <img src={imgMarine} className="card-img-top" alt="Blog 2" />
                <div className="card-body">
                  <h5 className="card-title">Buffeteau Marine</h5>
                  <p className="card-text">
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href="#!" className="btn btn-sm btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="card rounded-0">
                <img src={imgChloe} className="card-img-top" alt="Blog 3" />
                <div className="card-body">
                  <h5 className="card-title">Debonne Chloé</h5>
                  <p className="card-text">
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href="#!" className="btn btn-sm btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Kine;
