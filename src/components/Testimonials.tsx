import React from 'react';
import image1 from '../images/story-1.jpeg';
import image2 from '../images/story-2.jpeg';

const Testimonials = () => {
    return (
        <>
            <div className="story__pictures">
                <img src={image1} alt="couple with new house" className="story__img--1" />
                <img src={image2} alt="New house" className="story__img--2" />
            </div>
            
            <div className="story__content">
                <h3 className="heading-3 mb-sm">Happy customers</h3>
                <h2 className="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
                <p className="story__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Voluptatum mollitia quae.
                </p>
                <button className="btn">Find your own home</button>
            </div> 
        </>
    )
}

export default Testimonials;