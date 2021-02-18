import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
export const SliderData = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RxT-WwzOeAFDQ8uCeRitV-jYs5aXszLSwQ&usqp=CAU",
    "https://lh3.googleusercontent.com/proxy/lThOFr-nGf9RjQLxD9Q0n7sT932GLuuO0rCbdo0dfEPCmdY1UAMEs6hKTgtwrVMmSN4eBDGKIQE3f2LTdn4nAvgbvnKWUBseOphaC0053x8uyVAxwnOkIlT6kw8pxPVdSUDLxfJPmkjmqg-MvA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NyC5d1br9g-zqyVdCUQz-88x2WGKx75Fdw&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NyC5d1br9g-zqyVdCUQz-88x2WGKx75Fdw&usqp=CAU"
];

function Gallery() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={SliderData[0]} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SliderData[1]} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SliderData[2]} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SliderData[4]} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Gallery;