import React, { useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggle } from "../store/hamburgerSlice";

const Navigation = (props: any) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const menuItems = useSelector((state: any) => state.menu);
  const isOpen = useSelector((state: any) => state.hamburger);

  const navRef = useRef<HTMLElement | null>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (navRef.current && dropdownRef.current && navRef.current.getAttribute('data-dropdown')) {
      const dropdownHeight: number = dropdownRef.current.clientHeight;
      navRef.current.setAttribute('data-dropdown-height', dropdownHeight.toString());
    }
  }, []);

  useEffect(() => {
    if (navRef.current && navRef.current.getAttribute('data-dropdown')) {
      if (isOpen) {
        navRef.current.style.setProperty('height', navRef.current.getAttribute('data-dropdown-height') + 'px');
      } else {
        navRef.current.style.removeProperty('height');
      }
    }
  }, [isOpen]);

  const handleMenuItemClick = () => {
    if (isOpen) {
      dispatch(toggle());
    }
  };

  const renderItems = (items: any) => {
    return items.map((subItem: any) => (
      <li
        key={subItem.id}
        className={location.pathname.indexOf(subItem.href) !== -1 ? "is-active" : ""}
      >
        <Link to={subItem.href} onClickCapture={handleMenuItemClick} title="메뉴 이동하기">
          {subItem.text}
        </Link>
      </li>
    ));
  };

  return (
    <nav className={props.className} data-dropdown={props.dropdown} ref={navRef}>
      <ul ref={dropdownRef}>
        {menuItems.map((item: any) => (
          <li
            key={item.id}
            className={location.pathname.indexOf(item.href) !== -1 ? "is-active" : ""}
          >
            <Link to={item.href} onClickCapture={handleMenuItemClick} title="메뉴 이동하기">
              {item.text}
            </Link>
            <ul data-length={item.items ? item.items.length : 0}>{item.items && renderItems(item.items)}</ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
