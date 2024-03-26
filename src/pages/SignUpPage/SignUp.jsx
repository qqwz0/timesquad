import React, { useState } from "react";
import styles from "./SignUp.module.css";
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
    <div className={styles.wrapper}>
      <form action="">
        <h1>Sign Up</h1>
        <div className={styles.inputbox}>
          <input type="text" placeholder="Ім'я користувача" required />
          <PersonIcon className={styles.icon}/>
        </div>
        <div className={styles.inputbox}>
          <input type="email" placeholder='Електронна пошта' required />
          <GmailIcon className={styles.icon}/>
        </div>
        <div className={styles.inputbox}>
          <input
            type={showPassword1 ? 'text' : 'password'}
            placeholder='Пароль'
            required
          />
          <LockIcon className={styles.icon} onClick={togglePasswordVisibility1} />
        </div>
        <div className={styles.inputbox}>
          <input
            type={showPassword2 ? 'text' : 'password'}
            placeholder='Підтвердити пароль'
            required
          />
          <CheckCircleIcon className={styles.icon} onClick={togglePasswordVisibility2} />
        </div>
        <button type={styles.submit}>Зареєструватися</button>
        <div className={styles.registerlink}>
                <p>Вже маєш аккаунт?<a href="#"> Увійди!</a></p>
            </div>
      </form>
    </div>
  );
};

export default SignUp;