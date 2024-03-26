import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link as RouterLink } from "react-router-dom";
import './StartPage.css';

const Navbar = () => {

  return (
    <div className="home-nav">
      <div >
        <h1 className="silkscreen-bold">Time Fighters</h1>
      </div>
      <RouterLink to="/log-in">
        <AccountCircleIcon className="account-icon" />
      </RouterLink>
    </div>
  );
};

export default Navbar;
