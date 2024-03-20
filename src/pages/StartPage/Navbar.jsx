import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './StartPage.css';

const Navbar = () => {

  return (
    <div className="home-nav">
      <div >
        <h1 className="silkscreen-bold">Time Fighters</h1>
      </div>
        <AccountCircleIcon className="account-icon" />
      <div>
      </div>
    </div>
  );
};

export default Navbar;
