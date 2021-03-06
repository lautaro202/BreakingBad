import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getQuote } from '../redux/actions';
import './searchBar.scss'

export default function SearchBar () {
    const [ input, setInput ] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
      setInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getQuote(input));
        
    }
    

    return (
        
        <form 
        onSubmit={(e) => 
        handleSubmit(e)} 
        className='searchBar'>
            <div className="search__container">
                <p className="search__title">
                </p>
                <input
                onChange={handleChange}
                onSubmit={handleSubmit}
                className="search__input" type="text" placeholder="Realice su búsqueda..."/>
            </div>

        </form>
    )
}