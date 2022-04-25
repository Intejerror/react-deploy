import React from 'react'
import pdf from '../assets/downloadable/Resume`.pdf'
import tapesImg from '../assets/image/differences/tapes.png'

function Differences() {
    return (

        <div className="differences">
            <div className="wrapper">
                <div className="text">
                    <h2>В чем отличия между пленками?</h2>
                    <p>По ГОСТу есть несколько типов (классов) светоотражающих пленок<br /> отличающихся техническими характеристиками (в основном по<br /> светоотражению и сроку службы) и местом установки знаков.</p>
                    <p><a href={pdf} download='resume'>Подробнее</a></p>
                </div>
                <img src={tapesImg} alt="tapes.png" />
                <div className="bg"></div>
            </div>
        </div>

    )
}

export default Differences