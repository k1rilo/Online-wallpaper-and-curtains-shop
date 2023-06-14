import React from 'react'

import Products from '../container/Products'
import Catalogdata from '../data/Catalogdata'

export default function Catalog() {
  return (
    <>
      <section>
        <div>
          <div className='firstbanner'></div>
        </div>
      </section>
      <section className='wrapper'>
        <div className='catalog flex'>
          <div className='category flex'>
            <div className='title'>
              <h3>Категории</h3>
            </div>
            <div className='cost'>
              <h4>Цена</h4>
              <input className='min' name='min' placeholder='От'></input>
              <input className='max' name='max' placeholder='До'></input>
            </div>
            <div className='material'>
              <h4>Материал</h4>
              <select name='material'>
                <option value="">Все</option>
                <option value="Материал1">Материал1</option>
                <option value="Материал2">Материал2</option>
                <option value="Материал3">Материал3</option>
              </select>
            </div>
            <div className='color'>
              <h4>Цвет</h4>
              <form>
                <select name='color'>
                  <option value="">Все</option>
                  <option value="Цвет1">Цвет1</option>
                  <option value="Цвет2">Цвет2</option>
                  <option value="Цвет3">Цвет3</option>
                </select>
              </form>
            </div>
          </div>
          <div className='products flex'>
          {Catalogdata.map(Catalogdata =>
            <Products
              id={Catalogdata.id}
              img={Catalogdata.img}
              name={Catalogdata.name}
              cost={Catalogdata.cost}
            />
          )}
          </div>
        </div>
      </section>
    </>
  )
}
