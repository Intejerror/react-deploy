import { useContext } from 'react'
import { SignsContext } from '../signs-context'

function Catalog() {

    const signsList = useContext(SignsContext);

    return (
        <ul className='catalog'>

            {signsList.map((item, index) => {
                return <li key={index}><a href='#'>{item.name}</a></li>
            })}
        </ul>
    )
}

export default Catalog