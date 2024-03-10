import React from "react";
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Main = () => {
  const buttonStyle = {
    backgroundColor: '#4CAF50', 
    borderRadius: '8px', 
    color: '#ffffff', 
    padding: '10px 20px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
  };

  return (
    <div className="home-container">
      <div className="problem-text-container">
      <p className="ubuntu-condensed-regular">
          Ласкаво просимо на Time Fighters - твоє особисте просторово-часове поле пригод! Стань володарем свого часу та розвивай свого унікального персонажа, подорожуй між епохами і завданнями, та вигравай битви з часом!
        </p>
        <Button variant="contained" style={buttonStyle} endIcon={<ArrowForwardIcon />}>
          Start!
        </Button>
      </div>
      <div className="pers-image-container">
        <img src="./images/piligrim.jpg" alt="Your character!" />
      </div>
    </div>
  );
};

export default Main;
