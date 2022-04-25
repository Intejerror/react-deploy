import React from 'react'
import signImg from '../assets/image/typo-sizes/sign.png'
import pdf from '../assets/downloadable/Resume`.pdf'

function TypoSizes() {
    return (
        <>
            <a id="info"></a>{/*Якорь */}
            <div className="typo-sizes">
                <div className="wrapper">
                    <div className="text">
                        <h2>Какой типоразмер выбрать?</h2>
                        <p>Компания  ООО Дорстроймонтаж изготавливает знаки<br />всех типоразмеров.Согласно ГОСТ Р 52290-2004 типоразмеры<br /> дорожных знаков выбираются в соответствии с таблицей:</p>
                        <p><a href={pdf} download='resume'>Смотреть таблицу</a></p>
                    </div>
                    <img src={signImg} alt="sign.png" />
                </div>
            </div>
        </>
    )
}

export default TypoSizes