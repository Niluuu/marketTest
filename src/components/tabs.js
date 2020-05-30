import React from "react";
import iconSame from "../assets/img/ud.png";
import iconFilter from "../assets/img/ud2.png";

function Tabs() {
  return (
    <div class="smart">
      <div class="smart_all">
        <div class="smart_all_btns">
          <button class="btn smart_all_btns1 border-left-0">
            <img src={iconSame} alt="" />
            <span class="medium_11">Похожие</span>
          </button>
          <button class="btn smart_all_btns1 border-right-0">
            <img src={iconFilter} alt="" />
            <span class="medium_11">Фильтр</span>
          </button>
        </div>

        <div class="poseng_chold_cover pt-3 pb-3">
          <div class="poseng_chold">
            <a class="poseng_chold_link light_13" href="#">
              Смартфоны
            </a>
            <a class="poseng_chold_link light_13 active" href="#">
              Умные часы и браслеты
            </a>
            <a class="poseng_chold_link light_13" href="#">
              Умные часы и браслеты
            </a>
            <a class="poseng_chold_link light_13" href="#">
              Смартфоны
            </a>
            <a class="poseng_chold_link light_13" href="#">
              Наушники
            </a>
            <a class="poseng_chold_link light_13" href="#">
              Смартфоны
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
