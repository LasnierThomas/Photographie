import React from 'react';
import Navigation from "../Components/Navigation";
import Navigation2 from "../Components/Navigation2";
import photo from "../Assets/images/lea.jpg";
import "../styles/index.scss";

const Presentation = () => {
  return (
    <>
      <Navigation />
      <section className="all-composants">
        <div className="picture">
          <img src={photo} alt="image de la photographe" />
        </div>
        <div className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident quidem sequi, suscipit rem tenetur beatae ex. Molestias, vitae alias quod accusantium quae quo possimus a,
          doloremque ullam vero id porro error, dolorem qui animi. Minima provident odit, vero dolore facere explicabo? Quis quod provident consectetur ad temporibus? Et aliquam quibusdam praesentium
          quaerat ullam laudantium, consectetur libero dicta, veritatis aut atque pariatur commodi quia accusamus sint. Fuga recusandae alias ratione accusamus dolore quisquam consequuntur, molestias
          nisi animi harum vitae praesentium ipsa aperiam aliquid at quod aspernatur veritatis autem reiciendis, incidunt iure iste quibusdam porro doloribus. Quas itaque voluptatibus optio quos.
        </div>
      </section>

      <Navigation2 />
    </>
  );
};

export default Presentation;