import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Home } from '../interfaces';

const HomeCard = (props: Home) => {

    const [favorite, setFavorite] = useState('');

    const handleClick = (id:string) => {
        setFavorite(favorite === id ? '' : id);
    }

    return (
        <div className="home" key={props.id}>
            <img src={require(`../images/${props.image}`).default} alt={props.title} className="home__img" />
            <FaHeart className={`home__like ${favorite === props.image ? 'home__like--favorite' : 'home__like--default'}`} onClick={() => handleClick(props.image)}/>
            <h5 className="home__name">{props.title}</h5>
            <div className="home__location">
                {<props.location.icon/>}
                <p>{props.location.label}</p>
            </div>
            <div className="home__rooms">
                {<props.rooms.icon/>}
                <p>{props.rooms.label}</p>
            </div>
            <div className="home__area">
                {<props.meters.icon/>}
                <p>{props.meters.label}<sup>2</sup></p>
            </div>
            <div className="home__price">
                {<props.price.icon/>}
                <p>${props.price.label}</p>
            </div>

            <button className="btn home__btn">Contact realtor</button>
        </div>
    )
}

export default HomeCard;