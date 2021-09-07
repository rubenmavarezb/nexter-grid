import React, { useState } from 'react';
import { Feature } from '../interfaces';
import { FaGlobe, FaTrophy, FaMapPin, FaKey, FaPercentage, FaLock } from 'react-icons/fa';

const Features = () => {

    const [features] = useState<Feature[]>([
        {
            id:1,
            title:"World's best luxury homes",
            icon: FaGlobe,
            paragraph:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Voluptatum mollitia quae. '
        },
        {
            id:2,
            title:'Only the best properties',
            icon: FaTrophy,
            paragraph:'Tenetur distinctio necessitatibus pariatur voluptatibus.Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.'
        },
        {
            id:3,
            title:'All homes in top locations',
            icon: FaMapPin,
            paragraph:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.'
        },
        {
            id:4,
            title:'New home in one week',
            icon: FaKey,
            paragraph:' Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia. Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum. Vero ipsum sapiente molestias accusamus rerum.'
        },
        {
            id:5,
            title:'Top 1% realtors',
            icon: FaPercentage,
            paragraph:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.'
        },
        {
            id:6,
            title:'Secure payments on Nexter',
            icon: FaLock,
            paragraph:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.'
        },
    ])

    return (
       <section className="features">
           {features.length && features.map((feature) => (
                <div 
                    className="feature"
                    key={feature.id}
                >
                    {<feature.icon className="feature__icon"/>}
                    <h4 className="heading-4 heading-4--dark">
                        {feature.title}
                    </h4>
                    <p className="feature__text">
                        {feature.paragraph}
                    </p>
                </div>
           ))}
       </section> 
    )
}

export default Features;