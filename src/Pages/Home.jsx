import React from "react";
import Navigation from "../Components/Navigation";
import Navigation2 from "../Components/Navigation2";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { homeGallery } from "./HomeGallery";
import { Carousel } from "react-responsive-carousel"; 
import "../styles/index.scss";

const Home = () => {
  return (
    <Carousel autoPlay interval={3000} infiniteLoop showIndicators={false} showStatus={false} >
      {homeGallery.map((item, index) => {
        return (
          <div className="image-carousel" key={index} onClick={() => getImg(item.imgSrc)}>
            <img src={item.imgSrc} />
          </div>
        );
      })}
<Navigation />
<Navigation2 />

    </Carousel>
  );
};

export default Home;
