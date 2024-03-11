import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import './font.css';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Howitworks = () => {
  const howitworksInfoData = [
    {
      title: "створюй завдання, занотовуй плани",
      icon: <ScheduleIcon />
    },
    {
      title: "з легкістю та задоволенням виконуй їх у вигляді захоплюючої гри",
      icon: <SportsEsportsIcon />
    },
    {
      title: "долай прокрастинацію!",
      icon: <HowToRegIcon />
    },
  ];
  
  return (
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
  );
};

export default Howitworks;