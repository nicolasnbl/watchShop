import React from 'react';
import Search from './sreach_icon';
import Panier from './panier';
import Compte from './compte';
import Favoris from './favoris';


const nav = () => {
  return (
    <ul className="liste-icon">
      <li><Search /></li>     
      <li><Panier /></li>
      <li><Compte /></li>
      <li><Favoris /></li>
    </ul>
    
  )
}

export default nav