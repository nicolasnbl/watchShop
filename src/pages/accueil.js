import React, {useState} from 'react';
import DispatchBlock from '../component/DispatchBlock';
import Header from '../component/header';
import FenetreInfo from '../component/navInfoFenetre/fenetreInfo';
import FenetreInfoContext from '../FenetreInfoContext';

const Accueil = () => {

  const [stateMenu, setstateMenu] = useState({
    transformMenu: "transformTranslateX0",
    bgdBlack: "display-none",
  });
  const [menuSelect, setmenuSelect] = useState(1);

  const contextValue = {
    stateMenu,
    menuSelect,
    openFenetreInfo: setstateMenu,
    openSelectMenu: setmenuSelect,
  }

  var classNameFIB = "fenetreInfoBlock "+stateMenu.transformMenu;
  var classNameBBO = "bgdBlackOpacity "+stateMenu.bgdBlack;

  return (
    <FenetreInfoContext.Provider value={contextValue}>
      <header>
        <Header />
        <div className="smallScreenSearch">
          <input type="text" placeholder='Que recherchez-vous ?' />
        </div>
      </header>
      <div className={classNameFIB}>
        <FenetreInfo />
      </div>
      <div className={classNameBBO}></div>
      <main>
        <DispatchBlock />
      </main>
    </FenetreInfoContext.Provider>
  )
}

export default Accueil