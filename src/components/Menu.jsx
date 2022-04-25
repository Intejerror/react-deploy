import React from 'react'
import extensionImg from '../assets/image/extension.png'
import phoneImg from '../assets/image/phone.png'
import pdf from '../assets/downloadable/Resume`.pdf'
import MenuReviver from './MenuReviver'
import Catalog from './Catalog'

function Menu() {



    return (
        <>
            <MenuReviver />
            <div className="menu">

                <ul>
                    <li className='catalogReviver' onClick={() => {
                        const catalog = document.getElementsByClassName('catalog')[0];
                        catalog.style.display == 'none' ? catalog.style.display = 'flex' : catalog.style.display = 'none';
                    }}>Каталог</li>
                    {/* Не забыть: Поставить 'a' на 'li' и добавить onClick={#menu-reviver.checked = false}*/}

                    <Catalog />

                    <li><a href="#price">Прайс</a></li>
                    <li><a href="#info">Информация</a></li>
                    <li><a href="#delivery">Доставка</a></li>
                    <li><a href="#contacts">Контакты</a></li>
                </ul>


                <a className="price" href={pdf} download="resume">
                    <img src={extensionImg} alt="xlsx.png" />
                    Скачать прайс
                </a>


                <div className="phones">
                    <div className="phone">
                        <img src={phoneImg} alt="phone.png" />8 (8412) 71-03-30,</div>
                    <div className="phone">
                        <img src={phoneImg} alt="phone.png" />8 (8412) 25-70-04
                    </div>
                </div>


            </div>
        </>
    )
}

export default Menu