import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Image } from '../interfaces';

const Header = () => {

    const [images] = useState<Image[]>([
        {
            id:1,
            route:'logo-bbc.png',
            alt: 'Logo BBC'
        },
        {
            id:2,
            route:'logo-forbes.png',
            alt: 'Logo Forbes'
        },
        {
            id:3,
            route:'logo-techcrunch.png',
            alt: 'Logo techrunch'
        },
        {
            id:4,
            route:'logo-bi.png',
            alt: 'Logo bi'
        },
    ])

    return (
       <header className="header">
           <img src={logo} alt="Logo de Nexter" className="header__logo" />
           <h3 className="heading-3">Your own home:</h3>
           <h1 className="heading-1">The ultimate personal freedom</h1>
           <button className="btn header__btn">View our properties</button>
           <div className="header__seenon-text">As seen on</div>
           <div className="header__seenon-logos">
               {images.map(image => (
                   <img
                    key={image.id}
                    src={require(`../images/${image.route}`).default}
                    alt={image.alt}
                   />
               ))}
           </div>
       </header> 
    )
}

export default Header;