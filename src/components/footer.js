import React from "react";
import serviceIcon from "../assets/img/und.png";
import Collapse from "./collapse";

function Footer() {
  return (
    <div className="mob_container">
      <div className="footer_all_top">
        <h5 className="mb-3">
          <img src={serviceIcon} alt="" />
          <span className="light_15">Service</span>
        </h5>
        <h6 className="light_14 gery_text">Noch Fragen?</h6>
        <a
          className="light_18_aa mb-2 d-inline-block"
          href="tel: 040 - 3603 3603"
        >
          040 - 3603 3603
        </a>
        <h5 className="light_15 mb-0">Kostenloser Ruckruf-Service</h5>
        <a className="link_12_light" href="mailto:Company@gmail.com">
          Company@gmail.com
        </a>
      </div>
      <Collapse />
      <h5 className="medium_11 mt-1 mb-3 pl-3">Компания</h5>
      <div className="black_footer">
        <div className="mob_container">
          <h6 className="black_footer_h6">
            Интернет-магазин одежды, обуви и аксессуаров
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
