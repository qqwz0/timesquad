import React, { useState } from "react";
import "./SignUp.css";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import GmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SignUp = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(prevState => !prevState);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(prevState => !prevState);
  };

  return (
    <div className='wrapper'>
      <form action="">
        <h1>Sign Up</h1>
        <div className="input-box">
          <input type="text" placeholder="Ім'я користувача" required />
          <PersonIcon className="icon"/>
        </div>
        <div className="input-box">
          <input type="email" placeholder='Електронна пошта' required />
          <GmailIcon className="icon"/>
        </div>
        <div className="input-box">
          <input
            type={showPassword1 ? 'text' : 'password'}
            placeholder='Пароль'
            required
          />
          <LockIcon className="icon" onClick={togglePasswordVisibility1} />
        </div>
        <div className="input-box">
          <input
            type={showPassword2 ? 'text' : 'password'}
            placeholder='Підтвердити пароль'
            required
          />
          <CheckCircleIcon className="icon" onClick={togglePasswordVisibility2} />
        </div>
        <button type="submit">Зареєструватися</button>
        <div className="register-link">
                <p>Вже маєш аккаунт?<a href="#"> Увійди!</a></p>
            </div>
      </form>
    </div>
  );
};

export default SignUp;