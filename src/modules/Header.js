import React, { useRef } from "react";
import { menuList } from "../data/constant";

const Header = () => {
  const menuRef = useRef();
  const handleToggleMenu = () => {
    menuRef.current.classList.toggle("show");
  };

  return (
    <header className="header">
      <img src="logo.svg" alt="" className="header__logo" />
      <ul className="header__nav">
        {menuList.map((item, index) => (
          <li key={index} className="header__nav--item">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <button className="header__btn">Connect Wallet</button>
      <div className="header__menu" onClick={handleToggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="header__menu--icon"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="menu__medium" ref={menuRef}>
        {menuList.map((item, index) => (
          <div
            key={index}
            onClick={() => menuRef.current.classList.remove("show")}
          >
            <a href={`#${item}`}>{item}</a>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
