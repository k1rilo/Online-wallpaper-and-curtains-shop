import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import logo from '../img/logo.png'

export default function Header() {
  return (
    <>
      <header>
        <div className='head flex'>
            <div className='logof flex'>
              <img src={logo}></img>
              <h1>Мир обоев</h1>
            </div>
              <nav>
                <ul className='nav'>
                  <li><NavLink to="/">Главная</NavLink></li>
                  <li><NavLink to="/about">О нас</NavLink></li>
                  <li><NavLink to="/catalog">Каталог</NavLink></li>
                  <li><NavLink to="/contacts">Контакты</NavLink></li>
                </ul>
              </nav>
        </div>
        <div className='right_menu'>
          <Link to="/login"><div className='profile'></div></Link>
          <Link to="/cart"><div className='cart'></div></Link>
        </div>
      </header>
    </>
  )
}

