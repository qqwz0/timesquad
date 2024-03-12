import React from "react";
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import StoreIcon from '@mui/icons-material/Store';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './font.css';

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

  const howitworksInfoData = [
    {
      title: "Cтворюй завдання, занотовуй плани",
      icon: <ScheduleIcon />
    },
    {
      title: "З легкістю та задоволенням виконуй їх у вигляді захоплюючої гри",
      icon: <SportsEsportsIcon />
    },
    {
      title: "Долай прокрастинацію!",
      icon: <HowToRegIcon />
    },
  ];

  const PossibilitiesInfoData = [
    {
      title: "магазин",
      icon: <StoreIcon />,
    },
    {
      title: "завдання",
      icon: <AssignmentIcon />,
    },
  ];

  return (
    <div className="home-container">
  
      <div className="problem-container">
        <div className="problem-text-container">
          <p className="ubuntu-condensed-regular">
            Ласкаво просимо на Time Fighters - твоє особисте просторово-часове поле пригод! Стань володарем свого часу та розвивай свого унікального персонажа, подорожуй між епохами і завданнями, та вигравай битви з часом!
          </p>
          <Button variant="contained" style={buttonStyle} endIcon={<ArrowForwardIcon />}>
            Start!
          </Button>
        </div>
        <div className="problem-pic-container">
          <img src="./images/piligrim.jpg" alt="Description"/> 
        </div>
      </div>
  
      <div className="Possibilities-section-wrapper">
        <div className="Possibilities-section-top">
          <h1 className="ubuntu-condensed-heading">Різноманітність можливостей</h1>
        </div>
        <div className="Possibilities-section-shop">
          <img src="./images/piligrim.jpg" alt="Our shop" />
        </div>
        <div>
          <div className="Possibilities-section-text">
            <p>Some text here...</p>
          </div>
          <div className="Possibilities-section-pic">
            <img src="./images/piligrim.jpg" alt="Tasks adding" />
          </div>
        </div>
      </div>
  
      <div className="howitworks-section-wrapper">
        <div className="howitworks-section-top">
          <h1 className="ubuntu-condensed-heading">Як це працює?</h1>
          <p className="ubuntu-condensed-regular larger-font">
            Все дуже просто! Грай, збирай нагороди і водночас виконуй поставлені цілі.
          </p>
        </div>
        <div className="howitworks-section-bottom">
          {howitworksInfoData.map((data, index) => (
            <div className="howitworks-section-info" key={index}>
              <h2 className="ubuntu-condensed-regular">{data.title}</h2>
              {data.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;