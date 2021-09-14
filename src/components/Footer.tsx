import React, { useState } from 'react';
import { FooterLink } from '../interfaces';

const Footer = () => {

    const [footerLinks] = useState<FooterLink[]>([
        {
            id:1,
            label: 'Find your dream home',
            link: '/'
        },
        {
            id:2,
            label: 'Request proposal',
            link: '/'
        },
        {
            id:3,
            label: 'Download home planner',
            link: '/'
        },
        {
            id:4,
            label: 'Contact us',
            link: '/'
        },
        {
            id:5,
            label: 'Submit your property',
            link: '/'
        },
        {
            id:6,
            label: 'Find your dream home',
            link: '/'
        },
    ])

    return (
       <footer className="footer">
           <ul className="nav">
               {footerLinks.map(footerLink => (
                   <li 
                        className="nav__item"
                        key={footerLink.id}
                    >
                        <a 
                            className={'nav__link'}
                            href={footerLink.link}
                        >{footerLink.label}</a>
                   </li>
               ))}
           </ul>
           <p className="copyright">
               &copy; Copyright 2021 by Ruben Mavarez
           </p>
       </footer> 
    )
}

export default Footer;