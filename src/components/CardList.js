import React from 'react';
import Card from '../components/Card';

const CardList = ({films}) => {
    /*if(true){
        throw new Error('noo');
    }*/

    return (
        <div>
            {
                films.slice(0,500).map((data, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={films[i].id} 
                            title={films[i].title} 
                            poster={films[i].poster} 
                            release_date={films[i].release_date} 
                            overview={films[i].overview}
                            genres={films[i].genres}
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList;