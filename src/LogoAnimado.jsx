/* import { Component } from "react";
 */ import Pan from "./imagenes/pan.png";
import Queso from "./imagenes/queso.png";
import Jamon from "./imagenes/jamon.png";
import "./stylesheets/LogoAnimado.css";
/* import React from 'react'
 */
function LogoAnimado() {
  return (
    <>
      <div className="sandwich" id="sandwich">
        <div className="bread-top">
          <img src={Pan} alt="Bread Top" />
        </div>
        <div className="ham">
          <img src={Jamon} alt="Ham" />
        </div>
        <div className="cheese">
          <img src={Queso} alt="Cheese" />
        </div>
        <div className="bread-bottom">
          <img src={Pan} alt="Bread Bottom" />
        </div>
      </div>
    </>
  );
}

export default LogoAnimado;
