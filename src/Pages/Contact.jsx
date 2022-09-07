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
        <div className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, magnam! Odit voluptates illum quae iste non, praesentium commodi inventore rem sapiente, atque quod ducimus maxime culpa
          voluptatum earum excepturi ad corporis,animi vero laboriosam tempora veniam ab. Eos et ratione animi, ducimus laudantium nisi in consequatur, quia quos nam soluta?
        </div>
        <div className="contact">
          <ul>
            <li>
              <p>
                <FiMail name="email" /> Email:
              </p>
            </li>
            <li>
              <p>
                <FaPhoneSquareAlt name="phone" /> Téléphone:
              </p>
            </li>
            <li>
              <p>Réseaux:</p>Pour plus de photo rendez vous sur mes différent réseaux en bas de la page
            </li>
          </ul>
        </div>
      </section>

      <Navigation2 />
    </>
  );
};

export default Contact;
