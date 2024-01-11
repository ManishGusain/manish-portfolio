import React from 'react';

function Card({ cData }) {
    const { title, desc, link, img } = cData;

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={img} alt="img" className='card-img' />
                </div>
                <div className="flip-card-back">
                    <p className='card-title'>{title}</p>
                    <p className='card-desc'>{desc}</p>
                    <p className='card-link' onClick={()=>window.open(link, '_blank')}>Link</p>
                </div>
            </div>
        </div>
    );
}

export default Card;