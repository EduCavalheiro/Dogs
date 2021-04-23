import React from "react";
import { useParams } from "react-router";
import Head from "../Head/Head";
import styles from "./Produto.module.css";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (error) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <div>{error}</div>;
  if (produto === null) return null;

  return (
    <>
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`Ranek | ${produto.nome}`}
      />
      <section className={styles.produto + " animeLeft"}>
        <div>
          {produto.fotos.map((foto) => {
            return <img src={foto.src} key={foto.src} alt={foto.titulo} />;
          })}
        </div>
        <div>
          <h1>{produto.nome}</h1>
          <span className={styles.preco}>R$ {produto.preco}</span>
          <p className={styles.descricao}>{produto.descricao}</p>
        </div>
      </section>
    </>
  );
};

export default Produto;
