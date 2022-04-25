import React from 'react'
import Table from './Table'
import pdf from '../assets/downloadable/Resume`.pdf'
import extensionImg from '../assets/image/extension.png'

// const Td = styled.td`
//     border: 1px solid #dddddd;
//     padding: 5px;
//     align: center;
//     valign: center;
// `

function PriceList() {
    return (
        <section className="price-list">
            <div className="wrapper">
                <a id='price'></a>{/*Якорь */}
                <h2>Прайс-лист</h2>
                <p>
                    Наша продукция соответствует техническому регламенту Таможенного союза ТР ТС 014/2011<br />«О безопасности автомобильных дорог» и имеет соответствующий сертификат.
                </p>
                <p>
                    Все дорожные знаки производятся в четком соответствии ГОСТ 52290-2004 и ГОСТ 32945-2014
                </p>
                <Table />
                <button>Смотреть весь прайс</button>
                <a className="price" href={pdf} download="resume">
                    <img src={extensionImg} alt="xlsx.png" />
                    Скачать прайс
                </a>

            </div >
        </section >
    )
}

export default PriceList