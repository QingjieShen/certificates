import React from 'react';
import '../css/ThreeDCard.css';

interface ThreeDCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({ title, description, imageUrl }) => {
    const [displayHD, setDisplayHD] = React.useState(false);

    React.useEffect(() => {
        document.body.style.overflow = displayHD ? 'hidden' : 'auto';
    }, [displayHD]);

    return (
        <>
            <div className="card-container" onClick={() => setDisplayHD(!displayHD)
            }>
                <div className="img-container">
                    <img src={imageUrl} alt={title} className="card-image" />
                </div>
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                </div>
            </div>
            <div className={displayHD ? 'hdImage' : 'hdImage hidden'} onClick={(e) => 
                {
                    e.currentTarget.classList.add('hidden')
                    setDisplayHD(!displayHD)
                }
            }>
                <img src={imageUrl} alt={title} className="card-image" />
            </div>
        </>
    );
};

export default ThreeDCard;