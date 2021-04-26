import React from "react";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../services/api";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: "dog",
        password: "dog",
      });

      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);

      window.localStorage.setItem("token", json.token);
      getUser(json.token);
    }
  };

  return (
    <section className={styles.loginForm}>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entar</Button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};
