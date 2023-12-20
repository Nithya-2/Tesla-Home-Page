import React, { useState } from "react";
import Image1 from "../../Image/car1.jpeg";
import Image2 from "../../Image/car2.webp";
import Image3 from "../../Image/car3.jpeg";
import Image4 from "../../Image/car4.jpeg";

import "./Card.css";
import carVideo1 from "../../Video/carVideo.mp4";
const Card = () => {
  const cars = [
    {
      name: "test0",
      video: carVideo1,
      btn1: "Expolre Inventory",
      btn2: "Demo Drive",
    },
    {
      name: "test1",
      img: Image1,
      btn1: "Expolre Inventory",
      btn2: "Demo Drive",
    },
    {
      name: "test2",
      img: Image3,
      btn1: "Order Now",
      btn2: "Learn More",
    },
    {
      name: "test3",
      img: Image2,
      btn3: "Demo Drive",
    },
    {
      name: "test4",
      img: Image4,
      btn3: "Shop Now",
    },
  ];
  return (
    <div>
      {cars.map((value, key) => {
        return (
          <div key={key} className="card">
            {value.video && (
              <video
                className="carVideo"
                src={value.video}
                autoPlay
                loop
                muted
              />
            )}
            {value.img && <img className="carImg" src={value.img} />}
            {value.btn1 && <button className="view">{value.btn1}</button>}
            {value.btn2 && <button className="submit">{value.btn2}</button>}
            {value.btn3 && <button className="view">{value.btn3}</button>}

          </div>
        );
      })}
    </div>
  );
};

export { Card };
