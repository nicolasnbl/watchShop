import React, {useState} from 'react';
import Header from '../component/header';
import FenetreInfo from '../component/navInfoFenetre/fenetreInfo';

const Accueil = () => {

  const [stateMenu, setstateMenu] = useState("transformTranslateX100");

  var classNameFIB = "fenetreInfoBlock "+stateMenu;

  return (
    <div className="">
      <header>
        <Header />
      </header>
      <div className={classNameFIB}>
        <FenetreInfo modifyStateMenu={setstateMenu}/>
      </div>
      
    </div>
  )
}

export default Accueil