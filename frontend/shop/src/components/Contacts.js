import React from 'react'

export default function Contacts() {
  return (
    <div className='Contacts'>
      <section>
        <div>
          <div className='firstbanner'></div>
        </div>
      </section>
      <section>
        <div>
          <div className='contactsBlock flex'>
            <h2>Как связаться</h2>
            <div className='contact flex'>
              <div className='contactForm'>
                <form>
                <div class="form-group">
                  <input type="text" name="name" class="form-control" placeholder="Имя" />
                </div>
                <div class="form-group">
                  <input type="text" name="email" class="form-control" placeholder="Почта" />
                </div>
                <div class="form-group">
                  <textarea name="message" cols="30" rows="7" class="form-control" placeholder="Сообщение"></textarea>
                </div>
                <div class="form-group">
                  <input type="submit" value="Отправить" class="btn btn-primary" />
                </div>
                </form>
              </div>
              <div className='contactInfo'>
                <div className='adress'>
                  <p>Адрес: <span>347709 Ростовская область, Кагальницкий район,
                  станица Кировская, ул. Кирова, д. 2г магазин «Мир Декора»</span></p>
                </div>
                <div className='phone'>
                  <p>Номер: <span>-</span></p>
                </div>
                <div className='email'>
                  <p>Почта: <span>-</span></p>
                </div>
              </div>
            </div>
            <div className='map'>
            <div style={{position:"relative",overflow:"hidden"}}><iframe src="https://yandex.ru/map-widget/v1/?ll=39.704826%2C47.214599&mode=search&oid=1100902337&ol=biz&z=16.44" width="100%" height="500" frameborder="0" allowfullscreen="true" style={{position:"relative"}}></iframe></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
