import styles from "./LogIn.module.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      <form action="">
        <h1>Log In</h1>
        <div className={styles.inputbox}>
          <input type="text" placeholder="Ім'я користувача" required />
          <PersonIcon className={styles.icon} />
        </div>
        <div className={styles.inputbox}>
          <input
            type={showPassword1 ? "text" : "password"}
            placeholder="Пароль"
            required
          />
          <LockIcon className={styles.icon} onClick={togglePasswordVisibility1} />
        </div>

        <div className={styles.rememberforgot}>
          <label>
            <input type="checkbox" />
            Запам'ятай мене!
          </label>
          <a href="#">Забув пароль?</a>
        </div>

        <button type="submit">Увійти</button>
        <div className={styles.registerlink}>
          <p>
            Досі не маєш аккаунта?<Link to="/sign-up">Зареєструйся!</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
