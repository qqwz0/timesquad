import React from "react";
import Button from '@mui/material/Button';
import './font.css';

const Navbar = () => {

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px', 
  };

  const spacerStyle = {
    flexGrow: 1, 
  };


   const buttonStyle = {
    position: 'relative',
    //top: 10,
    //right: 30,
    backgroundColor: '#4CAF50', 
    color: '#FFF',
    padding: '11px 30px', 
    textDecoration: 'none',
    //transition: 'filter 0.3s ease', 
    //'&:hover': {
      //filter: 'brightness(90%)',
    //},
  };

  return (
    
    <nav style={navbarStyle}>
      <div>
      <h1 className="silkscreen-bold">TimeSquad</h1>
      </div>
      <div style={spacerStyle}></div>
      <div>
        <Button className="silkscreen-regular" variant="contained" style={buttonStyle}>
          Log In
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
