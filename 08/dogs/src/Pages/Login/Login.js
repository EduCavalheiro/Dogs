import React from "react";
import styles from "./Login.module.css";
import { Routes, Route } from "react-router-dom";
import { LoginForm } from "../../Components/LoginForm";
import { LoginCreate } from "../../Components/LoginCreate";
import { LoginPasswordRecovery } from "../../Components/LoginPasswordRecovery";
import { LoginPasswordReset } from "../../Components/LoginPasswordReset";

export const Login = () => {
  return (
    <div className={styles.login}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordRecovery />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};
