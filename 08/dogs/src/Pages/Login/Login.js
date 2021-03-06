import React from "react";
import styles from "./Login.module.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginForm } from "../../Components/LoginForm";
import { LoginCreate } from "../../Components/LoginCreate";
import { LoginPasswordRecovery } from "../../Components/LoginPasswordRecovery";
import { LoginPasswordReset } from "../../Components/LoginPasswordReset";
import { UserContext } from "../../Context/UserContext";

export const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/conta" />;
  }

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordRecovery />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};
