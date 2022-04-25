import React from 'react'
import qualityImg from '../assets/image/testimonials/quality.png'
import GOSTImg from '../assets/image/testimonials/GOST.png'
import cirtificateImg from '../assets/image/testimonials/certificate.png'

import operativityImg from '../assets/image/testimonials/operativity.png'
import discountsImg from '../assets/image/testimonials/discounts.png'
import warrantyImg from '../assets/image/testimonials/warranty.png'

import deliveryImg from '../assets/image/testimonials/delivery.png'
import installationImg from '../assets/image/testimonials/installation.png'
import russiaImg from '../assets/image/testimonials/russia.png'

function Testimonials() {
    return (
        <div className="testimonials">
            <div className="wrapper">
                <a id="delivery"></a>{/*Якорь */}
                <h2>Почему стоит выбрать нас?</h2>
                <ul className='testimonials__list'>

                    <li>
                        <span className="img-bg"><img src={qualityImg} alt="quality.png" /></span>
                        <h3>Высокое качество</h3>
                        <p>Контролируем качество продукции на всех этапах производства</p>
                    </li>
                    <li>
                        <span className="img-bg"><img src={GOSTImg} alt="GOST.png" /></span>
                        <h3>Изготавливаем по ГОСТу</h3>
                        <p>Вся продукция соответствует нормам ГОСТ и требованиям ГИБДД</p>
                    </li>
                    <li>
                        <span className="img-bg"><img src={cirtificateImg} alt="cirtificate.png" /></span>
                        <h3>Сертификат</h3>
                        <p>Вся  продукция имеет сертификат "Международный стандарт качества"</p>
                    </li>

                    <li>
                        <span className="img-bg"><img src={operativityImg} alt="operativity.png" /></span>
                        <h3>Оперативность</h3>
                        <p>Благодаря отлаженному производству, изготавливаем более тысячи знаков в день</p>
                    </li>
                    <li>
                        <span className="img-bg"><img src={discountsImg} alt="discounts.png" /></span>
                        <h3>Гибкая система скидок</h3>
                        <p>Для постоянных заказчиков и крупных партнеров готовы предложить систему скидок и индивидуальные условия сотрудничества</p>
                    </li>
                    <li>
                        <span className="img-bg"><img src={warrantyImg} alt="warranty.png" /></span>
                        <h3>Гарантия</h3>
                        <p>На все изделия предоставляется гарантия</p>
                    </li>

                    <li>
                        <span className="img-bg"><img src={deliveryImg} alt="delivery.png" /></span>
                        <h3>Доставка</h3>
                        <p>Доставка дорожных знаков осуществляется по всей территории России</p>
                    </li>
                    <li>
                        <span className="img-bg"><img src={installationImg} alt="installation.png" /></span>
                        <h3>Монтаж</h3>
                        <p>В индивидуальном порядке готовы оказать услуги по монтажу дорожных знаков</p>
                    </li>
                    <li>
                        <span className="img-bg"><img src={russiaImg} alt="russia.png" /></span>
                        <h3>Участвуем в госзакупках</h3>
                        <p></p>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Testimonials