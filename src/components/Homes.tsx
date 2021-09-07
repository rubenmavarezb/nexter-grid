import React, { useState } from 'react';
import HomeCard from './Home';
import { Home } from '../interfaces';
import { FaLocationArrow, FaUser, FaHome, FaKey } from 'react-icons/fa';

const Homes = () => {

    const [homes] = useState<Home[]>([
        {
            id:1,
            title:'Beautiful family house',
            image:'house-1.jpeg',
            location: {
                icon:FaLocationArrow,
                label:'USA'
            },
            rooms: {
                icon:FaUser,
                label:'5 rooms'
            },
            meters: {
                icon:FaHome,
                label:'325 m'
            },
            price: {
                icon:FaKey,
                label:'1,200,000'
            }
        },
        {
            id:2,
            title:'Modern Glass Villa',
            image:'house-2.jpeg',
            location: {
                icon:FaLocationArrow,
                label:'Canada'
            },
            rooms: {
                icon:FaUser,
                label:'6 rooms'
            },
            meters: {
                icon:FaHome,
                label:'450 m'
            },
            price: {
                icon:FaKey,
                label:'2,750,00'
            }
        },
        {
            id:3,
            title:'Couzy country house',
            image:'house-3.jpeg',
            location: {
                icon:FaLocationArrow,
                label:'UK'
            },
            rooms: {
                icon:FaUser,
                label:'4 rooms'
            },
            meters: {
                icon:FaHome,
                label:'250 m'
            },
            price: {
                icon:FaKey,
                label:'850.000'
            }
        },
        {
            id:4,
            title:'Large Rustical Villa',
            image:'house-4.jpeg',
            location: {
                icon:FaLocationArrow,
                label:'Portugal'
            },
            rooms: {
                icon:FaUser,
                label:'6 rooms'
            },
            meters: {
                icon:FaHome,
                label:'480 m'
            },
            price: {
                icon:FaKey,
                label:'1,950,000'
            }
        },
        {
            id:5,
            title:'Majestic Palace House',
            image:'house-5.jpeg',
            location: {
                icon:FaLocationArrow,
                label:'Germany'
            },
            rooms: {
                icon:FaUser,
                label:'8 rooms'
            },
            meters: {
                icon:FaHome,
                label:'4230 m'
            },
            price: {
                icon:FaKey,
                label:'9,500,000'
            }
        },
        {
            id:6,
            title:'Modern Family Apartment',
            image:'house-6.jpeg',
            location: {
                icon:FaLocationArrow,
                label:'Italy'
            },
            rooms: {
                icon:FaUser,
                label:'3 rooms'
            },
            meters: {
                icon:FaHome,
                label:'180 m'
            },
            price: {
                icon:FaKey,
                label:'600,000'
            }
        },
    ])

    return (
       <section className="homes">
           {homes.map(home => (
               <HomeCard
                    key={home.id}
                    {...home}
               />
           ))}
       </section> 
    )
}

export default Homes;