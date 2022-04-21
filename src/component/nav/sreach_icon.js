import React, {useEffect, useState} from 'react';

const Search = () => {

  const [isVisible, setVisible] = useState(true);

  var classNameTxt = "txt-search";

  const fct = () => {
    console.log("e");
    if(isVisible){
      classNameTxt = 'txt-search display-none';
      setVisible(false);
    }else{
      classNameTxt = "txt-search";
      setVisible(true);
    }
    
  }

  useEffect(() => {
    const element = document.getElementById("search");
    window.addEventListener('click', fct);
    return () => {
      window.removeEventListener('click', fct);
    }
  }, []);

  return (
    <div className="block-search" >
        <div className={classNameTxt} >
          Que recherchez-vous ?
        </div>
        <span className="icon">
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" id="search" type='button'>
              <path d="M17.17 16.48L12 11.36a5.5 5.5 0 10-4.22 2 5.41 5.41 0 003.51-1.27l5.14 5.13a.51.51 0 00.7 0 .5.5 0 00.04-.74zm-9.35-4.15a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" ></path>
          </svg>
        </span>
        <div className="trait-Search"></div>
    </div>
  )
}

export default Search