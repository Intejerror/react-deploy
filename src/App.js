import { useState } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import PopUp from './components/PopUp';
import './styles/styles.css'
import { SignsContext, signsList } from './signs-context'
import Signs from './components/Signs';
import PriceList from './components/PriceList';
import TypoSizes from './components/TypoSizes';
import Differences from './components/Differences';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  const [popUpVisibility, setPopUpVisibility] = useState(false);

  // Закрывает .menu После нажатия на один из якорей
  // const links = document.getElementsByClassName('menu')[0].childNodes[0].getElementsByTagName('a');
  // [...links].map(link => {
  //   link.addEventListener('click', () => {
  //     document.getElementById('menu-reviver').checked = false;
  //   })
  // })

  return (

    <SignsContext.Provider value={signsList}>
      <Header />
      {popUpVisibility ? <PopUp closePopUp={setPopUpVisibility} /> : <></>}
      <Hero callPopUp={setPopUpVisibility} />
      <Signs />
      <PriceList />
      <TypoSizes />
      <Differences />
      <Testimonials />
      <About />
      <Footer />
    </SignsContext.Provider>


  );
}


export default App;