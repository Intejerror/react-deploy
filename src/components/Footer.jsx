import { useContext } from 'react'
import { SignsContext } from '../signs-context'
import logoImg from '../assets/image/logo.png'

function Footer() {

    const signsList = useContext(SignsContext);

    return (
        <footer className='footer'>
            <a id="contacts"></a> {/*Якорь */}
            <div className="wrapper">

                <ul>
                    {signsList.map((item, index) => {
                        return <li key={index}><a href='#'>{item.name}</a></li>
                    })}
                </ul>

                <ul>
                    <li><a href="price">Прайс</a></li>
                    <li><a href="#">Информация</a></li>
                    <li><a href="#">Политика</a></li>
                    <li><a href="#">Доставка</a></li>
                </ul>
                <ul>
                    <li>Адрес:<br />г.  Пенза, ул. Космодемьянской, 5</li>
                    <li>Телефон:<br />8 (8412) 71-03-30, 25-70-04</li>
                    <li>E-mail:<br />info@dsm58.ru</li>
                </ul>
                <ul>
                    <li className='logo'>
                        <img src={logoImg} alt="logo.png" />
                        ДорСтройМонтаж
                    </li>
                    <li className='copyright'>© 2019 ДорСтройМонтаж.</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer