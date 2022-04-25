import React from 'react'
import crossImg from '../assets/image/cross.png'

function PopUp(props) {
    return (
        <div className="popUp">
            <form action="" encType="multipart/form-data" method="post">

                <h2>Оставьте заявку</h2>
                <p>Внесите данные в форму</p>

                <input type="name" placeholder='Ваше имя' />
                <input type="phone" placeholder='Ваш телефон' />
                <input type="email" placeholder='Ваш e-mail' />
                <textarea type="text" placeholder='Текст заявки*' />

                <p className='note'>*Важно! Заявка оставляется в форме:<br />1. Название. 2. Типоразмер знака. 3. Тип плёнки<br />4. Временный/постоянный. 5. Кол-во</p>

                <input id='fileUpload' type="file" accept="application/pdf, application/vnd.ms-excel" />

                <label htmlFor="fileUpload"><p>Прикрепить свой файл</p></label>

                <button type='submit' value='submit'>Отправить</button>

                <span className='note'>Нажимая кнопку, вы даете согласие на обработку <a href="" target='_blank'>персональных данных</a></span>

                <div className="closeButton" onClick={() => props.closePopUp(false)} >
                    <img src={crossImg} alt="close.png" />
                </div>

            </form>
        </div>
    )
}

export default PopUp