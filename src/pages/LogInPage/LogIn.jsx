import "./LogIn.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";

const LogIn = () => {
  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevState) => !prevState);
  };

  return (
    <div className="wrapper">
      <form action="">
        <h1>Log In</h1>
        <div className="input-box">
          <input type="text" placeholder="Ім'я користувача" required />
          <PersonIcon className="icon" />
        </div>
        <div className="input-box">
          <input
            type={showPassword1 ? "text" : "password"}
            placeholder="Пароль"
            required
          />
          <LockIcon className="icon" onClick={togglePasswordVisibility1} />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Запам'ятай мене!
          </label>
          <a href="#">Забув пароль?</a>
        </div>

        <button type="submit">Увійти</button>
        <div className="register-link">
          <p>
            Досі не маєш аккаунта?<a href="#">Зареєструйся!</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
