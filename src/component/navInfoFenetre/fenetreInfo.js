import React, {useState} from 'react'
import Accueil from '../../pages/accueil';

const FenetreInfo = ({modifyStateMenu}) => {

  var boolStateMenu = false;

  const [numMenu, setnumMenu] = useState("mb-favoris");

  var classNameMb = "movingBarre "+numMenu;

  const changeStateMenu = (bool) => {
    if(bool==false){
      modifyStateMenu("transformTranslateX100");
    }else{
      modifyStateMenu("transformTranslateX0");
    }
    boolStateMenu = !boolStateMenu;
  }

  const changerMenu = (e) => {
    
    switch(e){
      case 1:
        setnumMenu("mb-favoris");
        break;
      case 2:
        setnumMenu("mb-compte");
        break;
      case 3:
        setnumMenu("mb-panier");
        break;
    }
  }

  return (
    <div className="fenetreInfo">
        <div className="barre-1" >
              <svg className='cross' onClick={() => changeStateMenu(true)}>
                  <path d="M10.71 10l4.65-4.66a.495.495 0 10-.7-.7L10 9.29 5.34 4.64a.495.495 0 00-.7.7L9.29 10l-4.65 4.66a.48.48 0 000 .7.481.481 0 00.7 0L10 10.71l4.66 4.65a.482.482 0 00.7 0 .48.48 0 000-.7L10.71 10z"></path>
              </svg>
        </div>
        <div className="barre-2">
            <ul>
                <li onClick={() => changerMenu(1)}><p>Favoris</p></li>
                <li onClick={() => changerMenu(2)}><p>Compte</p></li>
                <li onClick={() => changerMenu(3)}><p>Panier</p></li>
            </ul>
            <div className={classNameMb}></div>
        </div>
    </div>
  )
}

export default FenetreInfo