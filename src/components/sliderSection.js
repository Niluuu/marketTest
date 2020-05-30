import React from "react";
import Carausel from "./carousel";
import left from "../assets/img/lep.png";

function SliderSection() {
  return (
    <div className="global">
      <div className="mob_container pr-0">
        <a>
          <img src={left} className="mr-1" alt="" />
          <span className="light_13 text-dark">Электроника</span>
        </a>
        <h1 className="bold_19">Глобальная распродажа!</h1>
        <h6 className="regular_13 color_838383">17 004 товара</h6>
        <Carausel />
      </div>
    </div>
  );
}

export default SliderSection;
