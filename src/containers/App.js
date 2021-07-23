import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css';

function App(){
    const [films, setFilms] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(()=> {
        fetch('https://raw.githubusercontent.com/meilisearch/MeiliSearch/main/datasets/movies/movies.json')
            .then( response => response.json() )
            .then( (movies) => {setFilms(movies)} );
    }, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredMovies = films.filter(film =>{
        return film.title
            .toLowerCase()
                .includes(searchfield.toLowerCase());
    })

    return !films.length ?
        <h1>Loading..</h1> :
        (
         <div className='tc'>
           <h1 className='f1'>Movies</h1>
           <SearchBox SearchChange={onSearchChange}/>
           <CardList films={filteredMovies}/>
         </div>
        );
}

export default App;
