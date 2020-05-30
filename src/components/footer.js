import React from "react";
import serviceIcon from "../assets/img/und.png";
import ListQuestions from "./listQuestions";

function Footer() {
  return (
    <div className="mob_container">
      <div class="footer_all_top">
        <h5 class="mb-3">
          <img src={serviceIcon} alt="" />
          <span class="light_15">Service</span>
        </h5>
        <h6 class="light_14 gery_text">Noch Fragen?</h6>
        <a class="light_18_aa mb-2 d-inline-block" href="tel: 040 - 3603 3603">
          040 - 3603 3603
        </a>
        <h5 class="light_15 mb-0">Kostenloser Ruckruf-Service</h5>
        <a class="link_12_light" href="mailto:Company@gmail.com">
          Company@gmail.com
        </a>
      </div>
      <ListQuestions />
    </div>
  );
}

export default Footer;
