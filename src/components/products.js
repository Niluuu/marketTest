import React from "react";
import data from "../products.json";
import productImg from "../assets/img/tv.png";

function Products() {
  const products = data.products;
  return (
    <div className="proboots">
      <div className="proboots_all">
        {products.map(({id, brand, name }) => {
          return (
            <a key={id} id={id} className="proboots_all_child">
              <div className="proboots_all_child_img">
                <img src={productImg} alt="" />
              </div>
              <div className="proboots_all_child_cont pt-2 pb-2">
                <h6 className="medium_13 mb-1">{brand.name}</h6>
                <h6 className="regular_13 mb-1">{name}</h6>
                <h6 className="medium_17 mb-0">7 599 ₽</h6>
              </div>
            </a>
          );
        })}
      </div>
      <div className="my_pagination">
        <ul className="my_pagination-ulll">
          <li>
            <a className="my_pagination_lia" href="#">
              1
            </a>
          </li>
          <li>
            <a className="my_pagination_lia disableda" href="#">
              ...
            </a>
          </li>
          <li>
            <a className="my_pagination_lia" href="#">
              98
            </a>
          </li>
          <li>
            <a className="my_pagination_lia active" href="#">
              99
            </a>
          </li>
          <li>
            <a className="my_pagination_lia" href="#">
              100
            </a>
          </li>
          <li>
            <a className="my_pagination_lia disableda" href="#">
              ...
            </a>
          </li>
          <li>
            <a className="my_pagination_lia" href="#">
              1000
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Products;
