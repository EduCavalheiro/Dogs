import React from "react";
import styles from "./Contato.module.css";
import bg from "../../img/bg.jpg";
import Head from "../../Components/Head/Head";

const Produtos = () => {
  return (
    <>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <section className={styles.contato + " animeLeft"}>
        <img src={bg} alt="BG"></img>
        <div>
          <h1>Entre em contato.</h1>
          <ul className={styles.dados}>
            <li>email@email.com</li>
            <li>999 999 999</li>
            <li>Rua xpto 585</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Produtos;
