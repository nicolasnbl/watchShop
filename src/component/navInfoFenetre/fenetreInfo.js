import React from 'react'

const fenetreInfo = () => {
  return (
    <div className="fenetreInfo">
        <div className="barre-1">
                <svg className='cross'>
                    <path d="M10.71 10l4.65-4.66a.495.495 0 10-.7-.7L10 9.29 5.34 4.64a.495.495 0 00-.7.7L9.29 10l-4.65 4.66a.48.48 0 000 .7.481.481 0 00.7 0L10 10.71l4.66 4.65a.482.482 0 00.7 0 .48.48 0 000-.7L10.71 10z"></path>
                </svg>
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