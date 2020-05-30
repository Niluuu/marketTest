import React from "react";
import data from "../categories.json";
import productImg from "../assets/img/ssss.png";

function ButicProducts() {
  const buticProducts = data.categories;
  console.log(buticProducts);
  return (
    <div class="buutic">
      <div class="mob_container">
        <div class="buutic_all">
          <h1 class="bold_19">BUTIK рекомендует</h1>
          <div class="buutic_all_child_cover">
            {buticProducts.map(({ parent_id, description }) => {
              return (
                <a href="#" class="buutic_all_child">
                  <div class="buutic_all_child_img">
                    <div class="mpopular_all_child_free">{parent_id} %</div>
                    <img src={productImg} alt="" />
                  </div>
                  <div class="buutic_all_child_cont">
                    <h5 class="mb-0">
                      <span class="bold_13 text-dark">1 504 ₽</span>{" "}
                      <span class="regular_10 gery_cross">1 050 ₽</span>
                    </h5>
                    <div class="buutic_all_child_cont_11">
                      <h6 class="regular_10 text-dark">{description}</h6>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButicProducts;
