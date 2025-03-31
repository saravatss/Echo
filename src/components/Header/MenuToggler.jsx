'use client'
import { useEffect } from 'react';

export default function MenuToggler() {
  useEffect(() => {
    const toggler = document.querySelector('.menu__toggler');
    const menu = document.querySelector('.menu');
    const menuSectionTitle = document.querySelectorAll('.menuSectionTitle');
    const menuNavItem = document.querySelectorAll('.menuNavItem');
    const navItem = document.querySelectorAll('.navItem');

    const handleClick = () => {
      toggler?.classList.toggle('active');
      menu?.classList.toggle('active');

      menuSectionTitle.forEach(el => el.classList.toggle('active'));
      menuNavItem.forEach(el => el.classList.toggle('active'));
      navItem.forEach(el => el.classList.toggle('active'));
    };

    toggler?.addEventListener('click', handleClick);

    return () => {
      toggler?.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}