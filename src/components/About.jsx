import React from 'react'
import bgImg from '../assets/image/about/background.png'
import logoImg from '../assets/image//about/logo.png'

function About() {
    return (
        <div className="about">
            <div className="wrapper">
                <div className="text">
                    <h2>О нас?</h2>
                    <p>Компания ООО Дорстроймонтаж занимается изготовлением дорожных знаков всех видов. Здесь вы можете заказать дорожные знаки II и III типоразмеров со светоотражающей поверхностью из световозвращающих пленок типа А, Б или В, а также знаки индивидуального проектирования.
                        Грамотно налаженное производство позволяет изготавливать и доставлять качественную продукцию в максимально короткие сроки.</p>

                </div>
                <div className="img">
                    <img src={bgImg} alt="background.png" />
                    <h1>
                        <img src={logoImg} alt="logo.png" />
                        ДорСтройМонтаж
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default About