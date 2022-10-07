import React from "react";
import Navigation from "../Components/Navigation";
import Navigation2 from "../Components/Navigation2";
import "../styles/index.scss";
import { FiMail } from "react-icons/fi";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navigation />
      <section className="all-blocks">
        <div className="description">Si vous désirez réaliser vos projets n'hésitez pas à me soliciter via les contacts ci-dessous</div>
        <div className="contact">
          <ul>
            <li>
              <p>
                <FiMail name="email" /> <span className="underline">Email:</span> lea.jphotographie@gmail.com
              </p>
            </li>
            <li>
              <p>{/* <FaPhoneSquareAlt name="phone" /> Téléphone:  */}</p>
            </li>
            <li>
              <p className="underline">Réseaux:</p>Pour en découvrir davantage rejoignez moi sur mes réseaux
            </li>
          </ul>
        </div>
      </section>

      <Navigation2 />
    </>
  );
};

export default Contact;
