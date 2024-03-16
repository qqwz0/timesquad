import React from "react";
import "./LogIn.css";
import './font.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const LogIn = () => {

    return (
      <div className='wrapper'>
        <form action="">
            <h1>Log   In</h1>
            <div className="input-box">
                <input type="text" placeholder="Ім'я користувача" required />
                <PersonIcon className="icon"/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Пароль' required />
                <LockIcon className="icon"/>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Запам'ятай мене!</label>
                <a href="#">Забув пароль?</a>
            </div>

            <button type="submit">Увійти</button>
            <div className="register-link">
                <p>Досі не маєш аккаунта?<a href="#">Зареєструйся!</a></p>
            </div>
        </form>
      </div>
    );
  };

  export default LogIn;