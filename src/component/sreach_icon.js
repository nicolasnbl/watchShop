import React, { useEffect } from 'react';

const Search = () => {

    const fct = () => {
        console.log("test");
    }

    useEffect(() => {
        const element = document.getElementById("search");
        element.addEventListener('mouseover', fct);
    
      return () => {
        window.removeEventListener('mouseover', fct);
      }
    }, []);
    


  return (
    <div className="" >
        <div className="">
            <div className="">Que recherchez-vous ?</div>
            <div className="trait-Search"></div>
        </div>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20px" id="search">
            <path d="M17.17 16.48L12 11.36a5.5 5.5 0 10-4.22 2 5.41 5.41 0 003.51-1.27l5.14 5.13a.51.51 0 00.7 0 .5.5 0 00.04-.74zm-9.35-4.15a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" ></path>
        </svg>
    </div>
  )
}

export default Search