import { useState } from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardItem } from "./CardItem";

interface array {
  name: string,
  photo: string
}

const arrayData: array[] = [
  {
    name: 'Andrea Rodriguez',
    photo: 'http://localhost/facebook/1.jpg'
  },
  {
    name: 'Zenia Camacho Camacho',
    photo: 'http://localhost/facebook/2.jpg'
  },
  {
    name: 'Karol Morales Duarte ',
    photo: 'http://localhost/facebook/3.jpg'
  },
  {
    name: 'Williams Garcia',
    photo: 'http://localhost/facebook/4.jpg'
  },
  {
    name: 'Yir Martinez Briceño',
    photo: 'http://localhost/facebook/5.jpg'
  },
  {
    name: 'Yud Rodriguez',
    photo: 'http://localhost/facebook/6.jpg'
  },
  {
    name: 'Fabricio Duarte Araya',
    photo: 'http://localhost/facebook/7.jpg'
  },
  {
    name: 'Stephanie Amador',
    photo: 'http://localhost/facebook/8.jpg'
  },
  {
    name: 'Alexander Rosales',
    photo: 'http://localhost/facebook/9.jpg'
  },
  {
    name: 'Wendy Angulo García',
    photo: 'http://localhost/facebook/10.jpg'
  }
]

export const Sliders = () => {
  const [display, _setDisplay] = useState(true);
  const [width, _setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <div
        style={{
          width: width + "px",
          display: display ? "block" : "none"
        }}
      >
        <Slider {...settings}>
          {
            arrayData.map((_value, _index) => (
              <div key={_index}>
                <CardItem name={_value.name} photo={_value.photo}/>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
}