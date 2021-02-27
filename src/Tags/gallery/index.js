import Carousel from "react-bootstrap/Carousel";
import './style.css';
import { useState } from "react";
export const SliderData = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RxT-WwzOeAFDQ8uCeRitV-jYs5aXszLSwQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kkoHBaP-zqU47sxo4gHHqOV_6Y0CPuOHPQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NyC5d1br9g-zqyVdCUQz-88x2WGKx75Fdw&usqp=CAU",
    "https://nipponpaint.co.in/wp-content/uploads/2019/11/How-to-choose-the-right-home-paint-colour-for-you-1024x607.jpg"
];

function Gallery() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" style={{ width: '2500px'}} src={SliderData[0]} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{ width: '250px'}} src={SliderData[1]} alt="Second slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{ width: '250px'}} src={SliderData[2]} alt="Third slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{ width: '250px'}} src={SliderData[3]} alt="Four slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}
export default Gallery;