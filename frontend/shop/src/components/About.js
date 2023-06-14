import React from 'react'
import firstPic from '../img/1.jpg';
import secondPic from '../img/2.jpg';
import thirdPic from '../img/3.jpg';
import fourthPic from '../img/4.jpg';


export default function About() {
  return (
    <div className='About'>
      <section>
        <div>
          <div className='firstbanner'></div>
        </div>
      </section>
      <section>
        <div className='wrapper'>
          <div className='about ta-c'>
            <h2 className='mtb50'>О компании</h2>
            <div className='advantages flex'>
              <div className='advantages_item flex'>
                <img src={fourthPic}></img>
                <h3>Оформление заказа</h3>
                <ul>
                  <li>Выбрать модель</li>
                  <li>Указать размеры</li>
                  <li>Оформить заказ</li>
                </ul>
              </div>
              <div className='advantages_item flex'>
                <img src={thirdPic}></img>
                <h3>Оплата/Доставка</h3>
                <ul>
                  <li>Выбрать модель</li>
                  <li>Указать размеры</li>
                  <li>Оформить заказ</li>
                </ul>
              </div>
              <div className='advantages_item flex'>
                <img src={secondPic}></img>
                <h3>Преимущества</h3>
                <ul>
                  <li>Более 500 моделей</li>
                  <li>Индивидуальные размеры</li>
                  <li>Любые цветовые разрешения</li>
                </ul>
              </div>
              <div className='advantages_item flex'>
                <img src={firstPic}></img>
                <h3>О наших товарах</h3>
                <ul>
                  <li>Экологические материалы</li>
                  <li>Антивандальная, влагостойкая поверхность</li>
                  <li>Флизелиновая и тканивая</li>
                  <li>Яркая и насыщенная печать</li>
                  <li>Легкость и простота монтажа</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
