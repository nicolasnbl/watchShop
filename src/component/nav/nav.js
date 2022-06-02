import React, { useContext } from 'react';
import Search from './sreach_icon';
import Panier from './panier';
import Compte from './compte';
import Favoris from './favoris';
import FenetreInfo from '../navInfoFenetre/fenetreInfo';
import Accueil from '../../pages/accueil';
import FenetreInfoContext from '../../FenetreInfoContext';

const Nav = () => {

  const contextValue = useContext(FenetreInfoContext);

  const openMenu = (e) => {
    contextValue.openFenetreInfo({transformMenu: "transformTranslateX100"});
    contextValue.openSelectMenu(e);
  }


  return (
    <ul className="liste-icon">
      <li><Search /></li>
      <li onClick={() => openMenu(1)}><Favoris /></li>
      <li onClick={() => openMenu(2)}><Compte /></li>
      <li onClick={() => openMenu(3)}><Panier /></li>
    </ul>
    
  )
}

export default Nav