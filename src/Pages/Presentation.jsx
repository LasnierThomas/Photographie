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
          Je m’appelle Léa, j'ai 23 ans et je suis passionnée de photographie depuis plus de 6 ans. Basée en Saône & Loire, près de Chalon sur Saône. <br />
          <br />
          J'ai commencé jeune, en autodidacte, par des photos depuis mon téléphone, puis est arrivé mon premier appareil photo en 2018 et le désire de me perfectionner toujours plus avec l'achat de
          nouveaux matériels et de pouvoir faire de ma passion mon métier et me voilà aujourd'hui, en tant que photographe professionnelle depuis peu. J'aime la simplicité et le naturel en apportant
          ma touche personnelle.
          <br />
          <br />
          Ce métier est ma passion, avant tout pour le contact humain, pour partager la beauté de la nature et des animaux mais surtout pour immortaliser tout les moments importants d'une vie et c'est
          pour cela que je veux en vivre et vous faire vivre.
          <br />
          <br />
          Merci d'avoir pris le temps de consulter mon site et de porter un intérêt à mon travail, je vous invite à découvrir mon univers et ma passion à travers mon site et pour découvrir d'avantage de photos venez découvrir mes réseaux sociaux où je publie beaucoup de mes créations.
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