import React from 'react'

const fenetreInfo = () => {
  return (
    <div className="fenetreInfo">
        <div className="barre-1">
            <div className="barre-1-cross" onClick={console.log("femer fenetre")}>
                X
            </div>
        </div>
        <div className="barre-2">
            <ul>
                <li>Favoris</li>
                <li>Compte</li>
                <li>Panier</li>
            </ul>
            <div className="movingBarre"></div>
        </div>
    </div>
  )
}

export default fenetreInfo