import React from "react";
import iconSame from "../assets/img/ud.png";
import iconFilter from "../assets/img/ud2.png";

function Tabs() {
  return (
    <div className="smart">
      <div className="smart_all">
        <div className="smart_all_btns">
          <button className="btn smart_all_btns1 border-left-0">
            <img src={iconSame} alt="" />
            <span className="medium_11">Похожие</span>
          </button>
          <button className="btn smart_all_btns1 border-right-0">
            <img src={iconFilter} alt="" />
            <span className="medium_11">Фильтр</span>
          </button>
        </div>

        <div className="poseng_chold_cover pt-3 pb-3">
          <div className="poseng_chold">
            <a className="poseng_chold_link light_13" href="#">
              Смартфоны
            </a>
            <a className="poseng_chold_link light_13 active" href="#">
              Умные часы и браслеты
            </a>
            <a className="poseng_chold_link light_13" href="#">
              Умные часы и браслеты
            </a>
            <a className="poseng_chold_link light_13" href="#">
              Смартфоны
            </a>
            <a className="poseng_chold_link light_13" href="#">
              Наушники
            </a>
            <a className="poseng_chold_link light_13" href="#">
              Смартфоны
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
