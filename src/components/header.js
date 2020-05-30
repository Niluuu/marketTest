import React, { useState } from "react";
import menu from "../assets/img/hum.png";
import avatar from "../assets/img/hed1.png";
import wish from "../assets/img/hed2.png";
import basket from "../assets/img/hed3.png";
import search from "../assets/img/search.png";

function Header() {
  const [val, setVal] = useState("");

  function handleChange(e) {
    setVal(e.target.value);
  }

  return (
    <div>
      <div className="header_1">
        <div className="mob_container">
          <div className="header_top">
            <div className="header_top_left">
              <div className="header_hummenu">
                <button className="btn header_hummenu_btn">
                  <img src={menu} alt="" />
                </button>
              </div>
              <h4 className="header_hummenu_logo">QUANTUM</h4>
            </div>
            <div className="header_top_right">
              <div className="header_top_right_child">
                <button className="btn p-0 header_top_btns1">
                  <img src={avatar} alt="" />
                </button>
              </div>
              <div className="header_top_right_child">
                <button className="btn p-0 header_top_btns1">
                  <img src={wish} alt="" />
                </button>
              </div>
              <div className="header_top_right_child">
                <button className="btn p-0 header_top_btns1">
                  <img src={basket} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_2">
        <div className="mob_container">
          <div className="header_bot">
            <div className="form-group header_bot_search">
              <button className="header_bot_search_input">
                <img src={search} alt="" />
              </button>
              <input
                type="text"
                className="form-control"
                placeholder="Искать на сайте"
                value={val}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
