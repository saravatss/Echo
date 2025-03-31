'use client'
import './header.css';
import Link from "next/link";
import MenuToggler from './MenuToggler';

export default function Header() {

  const handleLogoClick = () => {
    ym(100354197, 'reachGoal', 'clickLogo')
  }

  return (
    <header className="headerSearch">
      <MenuToggler />

      <div className="menu">
        <div className="menuContent">
          <div className="menuSection">
            <h2 className="menuSectionTitle">Разделы</h2>
            <div className="menuNavItems">
              <Link href="" className="menuNavItem">Алфавиты</Link>
              <Link href="" className="menuNavItem">Костюмы</Link>
              <Link href="" className="menuNavItem">Кухня</Link>
              <Link href="" className="menuNavItem">Вышивка</Link>
              <Link href="" className="menuNavItem">Религия</Link>
              <Link href="" className="menuNavItem">Традиции</Link>
              <Link href="" className="menuNavItem">Фольклор</Link>
              <Link href="" className="menuNavItem">Природа</Link>
              <Link href="" className="menuNavItem">Музыка</Link>
              <Link href="" className="menuNavItem">Вышивка</Link>
              <Link href="" className="menuNavItem">Живопись</Link>
            </div>
          </div>
          
          <div className="menuSection">
            <h2 className="menuSectionTitle">Народы</h2>
            <div className="menuNavItems">
              <Link href="" className="menuNavItem">Абазины</Link>
              <Link href="" className="menuNavItem">Алеуты</Link>
              <Link href="" className="menuNavItem">Бесерияне</Link>
              <Link href="" className="menuNavItem">Вепсы</Link>
              <Link href="" className="menuNavItem">Водь</Link>
              <Link href="" className="menuNavItem">Долганы</Link>
              <Link href="" className="menuNavItem">Ижорцы</Link>
              <Link href="" className="menuNavItem">Ительмены</Link>
              <Link href="" className="menuNavItem">Камчадалы</Link>
              <Link href="" className="menuNavItem">Кереки</Link>
              <Link href="" className="menuNavItem">Кеты</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="logoContainer">
        <div className="upperLogo">
        <div className="menu__toggler"><span className='sections'></span></div>
          <Link href={`/`} onClick={handleLogoClick}>
            <img src="./Logo.svg" className="Logo" />
          </Link>
      </div>
        <nav className="navigation">
          <Link href={`/`} className="navItem a">
            Лента
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
    </header>
  );
}
