import React, { useState } from 'react';
import { Realtor } from '../interfaces';

const TopRealtors = () => {
    const [realtors] = useState<Realtor[]>([
        {
            id:1,
            fullname: 'Erik Feinman',
            housessold: 245,
            img: 'realtor-1.jpeg',
            alt: 'Erik Feinman'
        },
        {
            id:2,
            fullname: 'Kim Brown',
            housessold: 212,
            img: 'realtor-2.jpeg',
            alt: 'Kim Brown'
        },
        {
            id:3,
            fullname: 'Toby Ramsey',
            housessold: 198,
            img: 'realtor-3.jpeg',
            alt: 'Toby Ramsey'
        },
    ])

    return (
       <div className="realtors">
           <h3 className="heading-3">Top 3 Realtors</h3>
            {realtors.map(realtor => (
                <div className="realtors__list" key={realtor.id}>
                    <img src={require(`../images/${realtor.img}`).default} alt={realtor.alt} className="realtors__img" />
                    <div className="realtors__details">
                        <h4 className="heading-4 heading-4--light">{realtor.fullname}</h4>
                        <p className="realtors__sold">{realtor.housessold} Houses Sold</p>
                    </div>
                </div>
            ))}
       </div> 
    )
}

export default TopRealtors;