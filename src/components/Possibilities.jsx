import React from "react";
import StoreIcon from '@mui/icons-material/Store';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './font.css';

const Possibilities = () => {
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
    <div className="Possibilities-section-wrapper">
  <div className="Possibilities-section-top">
    <h1 className="ubuntu-condensed-heading">різноманітність можливостей</h1>
  </div>
  <div className="Possibilities-section-bottom">
    {PossibilitiesInfoData.map((data, index) => (
      <div className="Possibilities-section-info" key={index}>
        <div className="icon-wrapper">
          {data.icon}
        </div>
        <h2 className="ubuntu-condensed-regular">{data.title}</h2>
        {data.title === "завдання" && (
          <div className="additional-buttons">
            <button className="additional-button">1...</button>
            <button className="additional-button">2...</button>
            <button className="additional-button">3...</button>
          </div>
        )}
      </div>
    ))}
  </div>
</div>
  );
};

export default Possibilities;