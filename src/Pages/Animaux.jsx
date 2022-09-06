import React, { useState } from "react";
import { animauxGallery } from "../Pages/AnimauxGalerie";
import Navigation from "../Components/Navigation";
import Navigation2 from "../Components/Navigation2";
import "../styles/index.scss";
import { FaWindowClose } from "react-icons/fa";

const Animaux = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState();
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <Navigation />
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <FaWindowClose onClick={() => setModel(false)}> </FaWindowClose>
      </div>
      <section className="allGalery">
        <div className="gallery">
          <div className="gallery-img">
            {animauxGallery.map((item, index) => {
              return (
                <div className="image" key={index} onClick={() => getImg(item.imgSrc)}>
                  <img src={item.imgSrc} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Navigation2 />
    </>
  );
};

export default Animaux;
