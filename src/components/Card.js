import React from 'react';

const Card = ({id, title, poster, overview, release_date, genres}) => {
    return (
        <div className='movie tc bg-light-blue dib br3 ma3 grow bw2 shadow-5 relative'>
            <img alt={`${title}.jpg`} src={poster} />
            <div>
                <h2>{title}</h2>
                <p>
                    { genres ?
                    genres.map(function(genre, index){
                        return `${genre}/`;
                    })
                : 'not defined' }
                </p>
                <div className='movie-over dib br3 bw2 bg-white absolute bottom-0 left-0 right-0'>
                    <h3>Overview:</h3>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;