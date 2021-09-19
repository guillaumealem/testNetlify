import React from "react";

import Section from "../../../HOC/Section";

const contact = () => {
  return (
    <Section id="contact">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Prise de </span>RDV
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            Ya de la place, mais il faudra rappeler !!
          </h6>
          <h6 className="section-subtitle mr-auto ml-auto">
            je vous expliquerais ça plus tard
          </h6>
        </div>
      </div>
    </Section>
  );
};

export default contact;
