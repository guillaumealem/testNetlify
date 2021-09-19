import React from "react";

import Section from "../../../HOC/Section";
import bgImage from "../../../assets/img/homeK.jpg";
import Link from "../../UI/Link/Link";

const home = () => {
  return (
    <Section id="home">
      <div>
        <div
          className="home-content p-5"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="intro container text-center text-light">
            <h1 className="title">Bienvenue</h1>
            <h2 className="sub-title mb-4">
              sur le site internet du cabinet de kinésithérapie à Villiers en
              Plaine
            </h2>
            <Link target="leCab" classes="btn btn-primary rounded-0 mr-2">
              Le cabinet
            </Link>
            <Link target="kine" classes="btn btn-primary rounded-0 mr-2">
              Les Kinés
            </Link>
            <Link target="contact" classes="btn btn-primary rounded-0 mr-2">
              Explication prise de RDV
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
