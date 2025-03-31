'use client'
import './footer.css';
import Button from '../UI/Buttons';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contentWrapper">
        <div className="mainContent">
          <h2 className="headline">
            Погрузитесь в изучение <br /> уникальных культур!
          </h2>
          <div className="ctaButton">
            <Link href="https://forms.gle/X49kwwSVUBqLncn49">
              <Button theme="orange" text="Стать автором"/>
            </Link>
          </div>
          
        </div>
        <div className="bottomContent">
          <div className="socialMedia">
            <img
              src="./vk-icon.svg"
              alt="Social media icon"
              className="socialIcon"
            />
            <img
              src="./tg-icon.svg"
              alt="Social media icon"
              className="socialIcon"
            />
          </div>
          <p className="copyright">© 2024 Эхо. Все права защищены.</p>
        </div>
      </div>
      <div className="sideContent">
        <nav className="menu">
          <a href="" className="menuItem menuItemActive">
            Главная
          </a>
          <a href="" className="menuItem">
            Авторы
          </a>
          <a href="" className="menuItem">
            Карта
          </a>
        </nav>
        <img src="./Logo_white.svg" className="logo" />
      </div>
    </footer>
  );
};

