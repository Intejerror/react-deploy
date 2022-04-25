import React from 'react'

import styled from 'styled-components'
import triangleImg from '../assets/image/price-list/triangle.png'
import roundImg from '../assets/image/price-list/round.png'
import squareImg from '../assets/image/price-list/square.png'
import threeWayImg from '../assets/image/price-list/three-way.png';
import twoWayImg from '../assets/image/price-list/two-way.png';
import busImg from '../assets/image/price-list/bus.png'
import grouppedImg from '../assets/image/price-list/groupped.png'
import sampleImg from '../assets/image/price-list/sample.png'

const Tbl = styled.table`
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #dddddd;
    border-collapse: collapse;
    .head {
        width: calc(100% / 4);
    }
`

const Th = styled.th`
    font-weight: 700;
    padding: 5px;
    background: #efefef;
    border: 1px solid #dddddd;
    
`

function Table() {
    return (
        <Tbl className="table">

            <thead>

                <tr>

                    <Th scope="row" colSpan="2" rowSpan="2" className="head signs">Знаки</Th>

                    <Th scope="row" colSpan="2" className="head">Пленка инженерная, тип А</Th>
                    <Th scope="row" colSpan="2" className="head" >Пленка высокоинтенс., тип Б</Th>
                    <Th scope="row" colSpan="2" className="head">Пленка микропризм., тип В</Th>
                </tr>

                <tr>

                    <Th>II типоразмер</Th>
                    <Th>III типоразмер</Th>

                    <Th>II типоразмер</Th>
                    <Th>III типоразмер</Th>

                    <Th>II типоразмер</Th>
                    <Th>III типоразмер</Th>
                </tr>

            </thead >

            <tbody>

                <tr>
                    <td align="center" valign="center" scope="row" colSpan="2" >
                        <div className="td-flex">
                            <img src={triangleImg} alt="triangle.png" />
                            Все треугольные знаки
                        </div>
                    </td>
                    <td align="center" valign="center" >1 250</td>
                    <td align="center" valign="center" >1 800</td>
                    <td align="center" valign="center" >1 950</td>
                    <td align="center" valign="center" >2 970</td>
                    <td align="center" valign="center" >2 550</td>
                    <td align="center" valign="center" >4 450</td>
                </tr>

                <tr>
                    <td align="center" valign="center" scope="row" colSpan="2" >
                        <div className="td-flex">
                            <img src={roundImg} alt="round.png" />
                            Все круглые знаки
                        </div>
                    </td>
                    <td align="center" valign="center">1 300</td>
                    <td align="center" valign="center">1 900</td>
                    <td align="center" valign="center">1 980</td>
                    <td align="center" valign="center">3 500</td>
                    <td align="center" valign="center">2 600</td>
                    <td align="center" valign="center">4 560</td>
                </tr>

                <tr>
                    <td align="center" valign="center" scope="row" colSpan="2" >
                        <div className="td-flex">
                            <img src={squareImg} alt="square.png" />
                            Все квадратные знаки
                        </div>
                    </td>
                    <td align="center" valign="center">1 300</td>
                    <td align="center" valign="center">1 900</td>
                    <td align="center" valign="center">1 980</td>
                    <td align="center" valign="center">3 500</td>
                    <td align="center" valign="center">2 600</td>
                    <td align="center" valign="center">4 560</td>
                </tr>

                <tr>
                    <td align="center" valign="center" scope="row" colSpan="2" >
                        <img src={threeWayImg} alt="three-way.png" />
                    </td>
                    <td align="center" valign="center">2 954,6</td>
                    <td align="center" valign="center">4 700</td>
                    <td align="center" valign="center">5 500</td>
                    <td align="center" valign="center">7 800</td>
                    <td align="center" valign="center">6 300</td>
                    <td align="center" valign="center">9 850</td>
                </tr>

                <tr>
                    <td align="center" valign="center" scope="row" colSpan="2" >
                        <img src={twoWayImg} alt="two-way.png" />
                    </td>
                    <td align="center" valign="center">1 300</td>
                    <td align="center" valign="center">1 900</td>
                    <td align="center" valign="center">1 980</td>
                    <td align="center" valign="center">3 500</td>
                    <td align="center" valign="center">2 600</td>
                    <td align="center" valign="center">4 560</td>
                </tr>

                <tr>
                    <td align="center" valign="center" scope="row" colSpan="2" >
                        <div className="td-flex__row">
                            <img src={busImg} alt="bus.png" />
                            <img src={grouppedImg} alt="groupped.png" />
                        </div>
                    </td>
                    <td align="center" valign="center" scope="row" colSpan="2">1 350</td>
                    <td align="center" valign="center" scope="row" colSpan="2">2 560</td>
                    <td align="center" valign="center" scope="row" colSpan="2">3 400</td>
                </tr>

                <tr>
                    <td align="center" valign="center" scope="row" colSpan="2" >
                        <img src={sampleImg} alt="sample.png" />
                    </td>
                    <td align="center" valign="center">1 850</td>
                    <td align="center" valign="center">2 700</td>
                    <td align="center" valign="center">3 300</td>
                    <td align="center" valign="center">5 450</td>
                    <td align="center" valign="center">4 250</td>
                    <td align="center" valign="center">6 770</td>
                </tr>

            </tbody>

        </Tbl >
    )
}

export default Table