import React from 'react';
import Search from './sreach_icon';
import Panier from './panier';
import Compte from './compte';
import Favoris from './favoris';
import FenetreInfo from '../navInfoFenetre/fenetreInfo';
import Accueil from '../../pages/accueil';


const Nav = () => {

  const openMenu = (e) => {
    console.log(e);
    FenetreInfo.changeStateMenu(true);
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