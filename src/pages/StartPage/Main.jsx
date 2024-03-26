import React from "react";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import KeyboardDoubleArrowDownSharp from "@mui/icons-material/KeyboardDoubleArrowDownSharp";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./StartPage.css";

const Main = () => {
  const howitworksInfoData = [
    {
      title: "Cтворюй завдання, занотовуй плани",
      icon: <ScheduleIcon />,
    },
    {
      title: "З легкістю та задоволенням виконуй їх у вигляді захоплюючої гри",
      icon: <SportsEsportsIcon />,
    },
    {
      title: "Долай прокрастинацію!",
      icon: <HowToRegIcon />,
    },
  ];

  return (
    <div className="home-container">
      <div className="problem-container">
        <div className="problem-text-container">
          <p className="ubuntu-condensed-regular">
            Чи не замислювався ти колись, наскільки наше життя схоже на гру?
            Кожен день ми, наче герої, виконуємо завдання та насолоджуємося
            винагородами, що дарує нам доля. Але, часом, Час перемагає і ми
            змушені зіткнутися з наслідками нашої власної недбалості.
          </p>
          <p className="ubuntu-condensed-regular">
            Долучайся до "Time Fighters" і отримай відданого приплічника у
            боротьбі з Часом. Розвивай свого персонажа, збираючи досвід та
            отримуючи нові навички, які допоможуть тобі подолати будь-які
            випробування. Приготуйся до захоплюючих пригод і незабутніх
            подорожей у світі "Time Fighters"!
          </p>{" "}
          <div>
            <RouterLink to="/sign-up">
              <button className="problem-button">Start!</button>
            </RouterLink>
          </div>
        </div>

        <div className="problem-pic-container">
          <img className="ourcharactermain" src="./images/ourcharacter2.png" />
        </div>
      </div>
      <div className="scroll">
        <Link
          to="kekw"
          smooth={true}
          duration={500}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div>
            <KeyboardDoubleArrowDownSharp className="scroll_arrow" />
          </div>
        </Link>
      </div>

      <div className="Possibilities-section-wrapper">
        <div className="Possibilities-section-top">
          <h1 className="ubuntu-condensed-heading" id="kekw">
            Різноманітність можливостей
          </h1>
        </div>
        <div className="Possibilities-section-content">
          {/* <div className="Possibilities-section-shop"> */}
          <div className="Possibilities-section-text grid3">Our Shop</div>
          <div className="Possibilities-section-pic grid1">
            <img src="./images/shop.jpg" alt="Our Shop" />
          </div>
          {/* </div> */}
          {/* <div className="Possibilities-section-tasks"> */}
          <div className="Possibilities-section-pic grid2">
            <img src="./images/tasks.png" alt="Tasks" />
          </div>
          <div className="Possibilities-section-text grid4">
            Tasks Adding
            {/* <p className="grid5">Some text here...</p> */}
          </div>
          {/* </div> */}
        </div>
        <div className="grid15" id="grid51">
          Тут ти можеш не лише додавати й виконувати завдання, а й стилізувати
          свого персонажа.
        </div>
      </div>
      <div className="second_scroll">
        <Link
          to="howitwork_text"
          smooth={true}
          duration={500}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div>
            <KeyboardDoubleArrowDownSharp className="second_scroll_arrow" />
          </div>
        </Link>
      </div>

      <div className="howitworks-section-wrapper">
        <div className="howitworks-section-top">
          <h1 className="ubuntu-condensed-heading" id="howitwork_text">
            Як це працює?
          </h1>
          <p className="ubuntu-condensed-regular larger-font">
            Все дуже просто! Грай, збирай нагороди і водночас виконуй поставлені
            цілі.
          </p>
        </div>
        <div className="howitworks-section-bottom">
          {howitworksInfoData.map((data, index) => (
            <div className="howitworks-section-info" key={index}>
              <h2 className="ubuntu-condensed-regular">{data.title}</h2>
              {data.icon}
            </div>
          ))}{" "}
          <div className="howitworks-button-wrapper">
            <RouterLink to="sign-up">
              <button className="howitworks-button">Start!</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
