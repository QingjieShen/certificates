import React from 'react';
import '../css/ThreeDCard.css';

interface ThreeDCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="three-d-card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default ThreeDCard;