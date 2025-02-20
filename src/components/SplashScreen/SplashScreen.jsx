"use client"
import "./SplashScreen.css";
import Modal from "@/components/SplashScreen/hoc/Modal"
import Popup from "@/components/SplashScreen/Popup"
import { useState } from "react";

const SplashScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="splashScreen">
      <div className="contentError">
        <div className="titleError">
          <h2 className="headingError">
            Подпишитесь на рассылку, чтобы <br /> раньше всех узнавать
            интересное
            <br />о малочисленных народах России!
          </h2>
          <form className="subscriptionForm">
            <input
              id="emailInput"
              type="email"
              placeholder="Электронная почта"
              className="emailInput"
              aria-label="Электронная почта"
            />
            <button type="submit" className="submitButton">
              Отправить
            </button>
          </form>
        </div>
        <p className="message">
          Спасибо, что заглянули на наш сайт, посвященный малочисленным народам
          России. В данный момент мы проводим работы по улучшению и обновлению
          контента, чтобы предоставить вам наиболее актуальную и интересную
          информацию.
        </p>
      </div>
      <div className="socialSection">
        <h3 className="socialHeading">Наши социальные сети</h3>
        <div className="socialIcons">
          <img src="./vk-icon-black.svg" className="socialIcon" />
          <img src="./tg-icon-black.svg" className="socialIcon" />
          <button onClick={() => setIsOpen(true)} className="popUp">
            qr-код
          </button>
          <Modal shown={isOpen} onClose={() => setIsOpen(false)}>
            <Popup onClose={() => setIsOpen(false)} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
