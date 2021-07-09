import React from 'react';

const SearchBox = ({searchField, SearchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 w-40 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search movie'
                onChange={SearchChange}
            />
        </div>
    );
}

export default SearchBox;