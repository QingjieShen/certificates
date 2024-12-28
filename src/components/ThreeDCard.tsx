import React from 'react';
import '../css/ThreeDCard.css';

interface ThreeDCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const range = [-10, 10]
function getRootatedValue(range: Array<number>, value: number, length: number) {
    return value / length * (range[1] - range[0]) + range[0];
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({ title, description, imageUrl }) => {
    const [displayHD, setDisplayHD] = React.useState(false);

    React.useEffect(() => {
        document.body.style.overflow = displayHD ? 'hidden' : 'auto';
    }, [displayHD]);

    return (
        <>
            <div 
                className="card-container" 
                onClick={() => setDisplayHD(!displayHD)}
                onMouseMove={(e) => {
                    const {offsetX, offsetY} = e.nativeEvent;
                    const {offsetWidth, offsetHeight} = e.currentTarget;
                    const rx = -getRootatedValue(range, offsetY, offsetWidth);
                    const ry = getRootatedValue(range, offsetX, offsetHeight);
                    e.currentTarget.style.setProperty('--rx', `${Math.round(rx)}deg`);
                    e.currentTarget.style.setProperty('--ry', `${Math.round(ry)}deg`);
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty('--rx', `0deg`);
                    e.currentTarget.style.setProperty('--ry', `0deg`);
                }}
            >
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