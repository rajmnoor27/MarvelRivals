import React from 'react';
import '../modules.css/Character.css'; 

const Character = ({ name, image, description }) => {
    return (
        <div className="character-box">
            <h2 className="character-name">{name}</h2>
            <img className="character-image" src={image} alt={name} />
            <p>{description}</p>
        </div>
    );
};

export default Character;