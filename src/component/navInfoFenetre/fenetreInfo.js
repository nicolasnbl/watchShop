import React, {useContext, useEffect, useState} from 'react'
import FenetreInfoContext from '../../FenetreInfoContext';

const FenetreInfo = () => {

  const contextValue = useContext(FenetreInfoContext); //import context

  const closeMenu = () => {
    contextValue.openFenetreInfo({transformMenu: "transformTranslateX0", bgdBlack: "display-none-bgdBlack"});
  }

  useEffect(() => { //écoute la valeur selectionner dans nav
    changerMenu(contextValue.menuSelect);
  }, [contextValue.menuSelect])
  

//Partie movingbarre
  const [numMenu, setnumMenu] = useState("mb-favoris");
  var classNameMb = "movingBarre "+numMenu;
//Partie changement contenu menu
  const [menuOn, setmenuOn] = useState({
    n1: {contenu: "", title: "textShadow"},
    n2: {contenu: "display-none", title: ""},
    n3: {contenu: "display-none", title: ""},
  });
  var classCM_1 = "blue menu "+menuOn.n1.contenu;
  var classCM_2 = "red menu "+menuOn.n2;
  var classCM_3 = "green menu "+menuOn.n3;
  var classTM_1 = menuOn.n1.title;
  var classTM_2 = menuOn.n2.title;
  var classTM_3 = menuOn.n3.title;
//Fonction menu globale
  const changerMenu = (e) => {
    switch(e){
      case 1:
        setnumMenu("mb-favoris");
        setmenuOn({n1: {contenu: "", title: "textShadow"}, n2: {contenu: "display-none", title: ""}, n3: {contenu: "display-none", title: ""}});
        break;
      case 2:
        setnumMenu("mb-compte");
        setmenuOn({n1: {contenu: "display-none", title: ""}, n2: {contenu: "", title: "textShadow"}, n3: {contenu: "display-none", title: ""}});
        break;
      case 3:
        setnumMenu("mb-panier");
        setmenuOn({n1: {contenu: "display-none", title: ""}, n2: {contenu: "display-none", title: ""}, n3: {contenu: "", title: "textShadow"}});
        break;
    }
  }


  return (
    <div className="fenetreInfo">
        <div className="barre-1" >
              <svg className='cross' onClick={() => closeMenu(true)}>
                  <path d="M10.71 10l4.65-4.66a.495.495 0 10-.7-.7L10 9.29 5.34 4.64a.495.495 0 00-.7.7L9.29 10l-4.65 4.66a.48.48 0 000 .7.481.481 0 00.7 0L10 10.71l4.66 4.65a.482.482 0 00.7 0 .48.48 0 000-.7L10.71 10z"></path>
              </svg>
        </div>
        <div className="barre-2">
            <ul>
                <li onClick={() => changerMenu(1)}><p className={classTM_1}>Favoris</p></li>
                <li onClick={() => changerMenu(2)}><p className={classTM_2}>Compte</p></li>
                <li onClick={() => changerMenu(3)}><p className={classTM_3}>Panier</p></li>
            </ul>
            <div className={classNameMb}></div>
        </div>
        <div className="barre-3">
          <div className={classCM_1}></div>
          <div className={classCM_2}></div>
          <div className={classCM_3}></div>
        </div>
    </div>
  )
}

export default FenetreInfo