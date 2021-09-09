import React, { useState } from 'react';
import { Image } from '../interfaces';

const Gallery = () => {

    const [images] = useState<Image[]>([
        {
            id:1,
            route: 'gal-1.jpeg',
            alt: 'Gallery image 1',
            gridRow: '1 / span 2',
            gridColumn: '1 / span 2'

        },
        {
            id:2,
            route: 'gal-2.jpeg',
            alt: 'Gallery image 2',
            gridRow: '1 / span 3',
            gridColumn: '3 / span 3'
        },
        {
            id:3,
            route: 'gal-3.jpeg',
            alt: 'Gallery image 3',
            gridRow: '1 / span 2',
            gridColumn: '6 / 7'
        },
        {
            id:4,
            route: 'gal-4.jpeg',
            alt: 'Gallery image 4',
            gridRow: '1 / span 2',
            gridColumn: '7 / -1'
        },
        {
            id:5,
            route: 'gal-5.jpeg',
            alt: 'Gallery image 5',
            gridRow: '3 / span 3',
            gridColumn: '1 / span 2'
        },
        {
            id:6,
            route: 'gal-6.jpeg',
            alt: 'Gallery image 6',
            gridRow: '4 / span 2',
            gridColumn: '3 / span 2'
        },
        {
            id:7,
            route: 'gal-7.jpeg',
            alt: 'Gallery image 7',
            gridRow: '4 / 5',
            gridColumn: '5 / 6'
        },
        {
            id:8,
            route: 'gal-8.jpeg',
            alt: 'Gallery image 8',
            gridRow: '3 / span 2',
            gridColumn: '6 / span 2'
        },
        {
            id:9,
            route: 'gal-9.jpeg',
            alt: 'Gallery image 9',
            gridRow: '3 / span 3',
            gridColumn: '8 / -1'
        },
        {
            id:10,
            route: 'gal-10.jpeg',
            alt: 'Gallery image 10',
            gridRow: '6 / span 2',
            gridColumn: '1 / 2'
        },
        {
            id:11,
            route: 'gal-11.jpeg',
            alt: 'Gallery image 11',
            gridRow: '6 / span 2',
            gridColumn: '2 / span 2'
        },
        {
            id:12,
            route: 'gal-12.jpeg',
            alt: 'Gallery image 12',
            gridRow: '6 / span 2',
            gridColumn: '4 / 5'
        },
        {
            id:13,
            route: 'gal-13.jpeg',
            alt: 'Gallery image 13',
            gridRow: '5 / span 3',
            gridColumn: '5 / span 3'
        },
        {
            id:14,
            route: 'gal-14.jpeg',
            alt: 'Gallery image 14',
            gridRow: '6 / span 2',
            gridColumn: '8 / -1'
        },
    ])

    return (
       <section className="gallery">
           {images.length && images.map((image, i) => (
               <figure 
                    className={`gallery__item gallery__item--${i+1}`}
                    style={{
                        gridRow: image.gridRow ? image.gridRow : 'auto',
                        gridColumn: image.gridColumn ? image.gridColumn : 'auto'
                    }}
                >
                    <img
                        key={image.id}
                        className="gallery__img"
                        src={require(`../images/${image.route}`).default}
                        alt={image.alt}
                    />
               </figure>
           ))}
       </section> 
    )
}

export default Gallery;