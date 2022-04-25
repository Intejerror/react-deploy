import React from 'react'
import video from '../assets/video/background.mp4'

function Hero(props) {
    return (
        <section className="hero">

            <div className="darkening"></div>

            <video autoPlay muted loop src={video}></video>

            <div className="wrapper">
                <h1>Производство и продажа <br /><span className='accent-color'>дорожных знаков</span><br /> в Пензе</h1>
                <p>Производство в соответствии ГОСТу.<br />Доставка по всей территории России.</p>
                <button onClick={() => props.callPopUp(true)}>оставить заявку</button>
            </div>

        </section>
    )
}

export default Hero