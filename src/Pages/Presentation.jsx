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
          Bonjour et bienvenue! <br />
          <br />
          Moi c'est Léa, j'ai 23 ans et je suis passionnée de photographie depuis maintenant plus de 6 ans. <br />
          Je suis basée en Saône & Loire, près de Chalon-sur-Saône. <br />
          <br />
          La photographie m'a toujours passionnée j'ai donc décidé de commencer en autodidacte, avec des photos prisent depuis mon téléphone, puis et arrivé mon premier appareil photo en 2018 avec le
          désir de me perfectionner toujours plus avec l'achat de nouveaux matériels et de pouvoir faire de ma passion mon métier. Et me voilà aujourd'hui, en tant que photographe professionnelle
          depuis peu. J'aime la simplicité et le naturel en apportant ma touche personnelle.
          <br />
          <br />
          Aujourd'hui, plus qu'un métier c'est avant tout une passion, à travers laquelle je souhaite partager la beauté de la nature et du monde animal ainsi qu'immortaliser tous les moments
          importants de la vie et ce sont pour toutes ces raisons que je veux vivre de cette passion.
          <br />
          <br />
          Je vous invite à découvrir mon univers et ma passion à travers mon site et pour découvrir davantage de photos venez découvrir mes réseaux sociaux où je publie beaucoup de mes créations.
          <br />
          <br />
          Merci de porter un intérêt à mon travail.
          <br />
          <br />
          Bonne visite et à bientôt.
        </div>
      </section>

      <Navigation2 />
    </>
  );
};

export default Presentation;