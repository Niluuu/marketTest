import React from "react";
import data from "../categories.json";
import productImg from "../assets/img/ssss.png";

function ButicProducts() {
  const buticProducts = data.categories;
  return (
    <div className="buutic">
      <div className="mob_container">
        <div className="buutic_all">
          <h1 className="bold_19">BUTIK рекомендует</h1>
          <div className="buutic_all_child_cover">
            {buticProducts.map(({ parent_id, description }, i) => {
              return (
                <a key={i} href="#" className="buutic_all_child">
                  <div className="buutic_all_child_img">
                    <div className="mpopular_all_child_free">{parent_id} %</div>
                    <img src={productImg} alt="" />
                  </div>
                  <div className="buutic_all_child_cont">
                    <h5 className="mb-0">
                      <span className="bold_13 text-dark">1 504 ₽</span>{" "}
                      <span className="regular_10 gery_cross">1 050 ₽</span>
                    </h5>
                    <div className="buutic_all_child_cont_11">
                      <h6 className="regular_10 text-dark">{description}</h6>
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
