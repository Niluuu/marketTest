import React, { useState, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import Col from "react-bootstrap/Col";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import faqsData from "../data/faqsData";

import down from "../assets/img/down.png";
import apkIcon1 from "../assets/img/ap1.png";
import apkIcon2 from "../assets/img/ap2.png";

// function CustomToggle({ children, eventKey }) {
//   const decoratedOnClick = useAccordionToggle(eventKey, () =>
//     console.log(children)
//   );

//   return (
//     <button
//       className="my_accordion_btn collapsed"
//       type="button"
//       onClick={decoratedOnClick}
//     >
//       <span className="my_accordion_btn_cont">
//         {children}
//         <span className="my_accordion_btn_imgg">
//           <img src={down} alt="" />
//         </span>
//       </span>
//     </button>
//   );
// }
function CustomToggle({ children, eventKey }) {
  const currentEventKey = useContext(AccordionContext);
  const accordionIsExpanded = currentEventKey > 0;
  const decoratedOnClick = useAccordionToggle(eventKey, () => eventKey);
  const isCurrentEventKey = currentEventKey === eventKey;
  console.log(isCurrentEventKey);
  return (
    <div
      onClick={decoratedOnClick}
      className={
        isCurrentEventKey && accordionIsExpanded
          ? "my_accordion_btn_cont border-none"
          : "my_accordion_btn_cont"
      }
    >
      {children}
      <img
        src={down}
        alt=""
        className={
          isCurrentEventKey && accordionIsExpanded
            ? "down_icon_btn "
            : "down_icon_btn icon_rotated"
        }
      />
    </div>
  );
}

function Example() {
  return (
    <Accordion className="card" defaultActiveKey="0">
      {faqsData.map(({ question, description, id }, index) => {
        return (
          <div key={id}>
            <CustomToggle eventKey={id}>
              <div> {question}</div>
            </CustomToggle>
            <Accordion.Collapse eventKey={id}>
              <Col xs lg="2">
                {description}
              </Col>
            </Accordion.Collapse>
          </div>
        );
      })}
      <div>
        <CustomToggle eventKey="5">
          <div>Для мобильных устройств</div>
        </CustomToggle>
        <Accordion.Collapse eventKey="5">
          <Col xs>
            <div className="appfooter mb-3 pt-1">
              <a className="appfooter_child1 mr-2" href="#">
                <img src={apkIcon1} alt="" />
              </a>
              <a className="appfooter_child1" href="#">
                <img src={apkIcon2} alt="" />
              </a>
            </div>
            <h4 className="regular_11">
              Вы также можете перейти на
              <a className="gery_text_footer" href="#">
                основной сайт
              </a>
            </h4>
          </Col>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
}

export default Example;
