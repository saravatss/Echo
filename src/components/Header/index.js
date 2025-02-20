'use client'
import './header.css';

import Link from "next/link";

export default function Header() {
  return (
    <header className="headerSearch">
      <div className="logoContainer">
        <div className="upperLogo">
          <img src="./burgericon.svg" className="burgerIcon" />
          <img src="./Logo.svg" className="Logo" />
        </div>
        <nav className="navigation">
          <Link href={`/`} className="navItem navItem-active a">
            Главная
          </Link>
          <Link href={`/splashScreen`} className="navItem a">
            Авторы
          </Link>
          <Link href={`/splashScreen`} className="navItem a">
            Карта
          </Link>
        </nav>
      </div>
      <form className="searchContainer">
        <img src="./searchicon.svg" className="searchIcon" />
        <input
          type="text"
          id="searchInput"
          className="searchInput"
          placeholder="Введите запрос"
          aria-label="Введите запрос"
        />
      </form>
      <img
        src="./user-icon.svg"
        alt="User profile"
        className="userIcon"
      />
    </header>
  );
}
