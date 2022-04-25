import { useContext } from 'react'
import { SignsContext } from '../signs-context';
import styled from 'styled-components';
import standardImg from '../assets/image/signs/standard.png'
import LEDImg from '../assets/image/signs/LED.png'
import barrageImg from '../assets/image/signs/barrage.png'
import temporaryImg from '../assets/image/signs/temporary.png'
import fireAlarmImg from '../assets/image/signs/fire-alarm.png'

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`
const Li = styled.li`
font-family: 'Montserrat';
text-align: center;
padding-top: 88px;
background: var(--clr-white);
font-size: 16px;
line-height: 24px;
font-weight: 700;
max-width: 264px;
height: 168px;
position: relative;
margin: 0 8px;
margin-top: 64px;


&:hover {
    background: var(--clr-main);
}
`

const Icon = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    border: 5px solid var(--clr-main);
    left: 50%;
    transform: translateX(-50%);
    top: -40px;
    background-color: var(--clr-white);
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

function Signs() {

    const signsList = useContext(SignsContext);

    return (
        <section className="signs">
            <div className="wrapper">
                <Ul>
                    <Li>{signsList[0].name}<Icon><img src={standardImg} alt="standard.png"></img></Icon></Li>
                    <Li>{signsList[0].name}<Icon><img src={LEDImg} alt="LED.png"></img></Icon></Li>
                    <Li>{signsList[0].name}<Icon><img src={barrageImg} alt="barrage.png"></img></Icon></Li>
                    <Li>{signsList[0].name}<Icon><img src={temporaryImg} alt="temporary.png"></img></Icon></Li>
                    <Li>{signsList[0].name}<Icon><img src={fireAlarmImg} alt="fireAlarm.png"></img></Icon></Li>
                </Ul>
            </div>
        </section>
    )
}

export default Signs