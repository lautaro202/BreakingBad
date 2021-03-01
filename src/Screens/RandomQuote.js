import React from 'react'
import './RandomQuote.scss'
import {getRandomQuote} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'


export default function Random() {  
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getRandomQuote())
    }
    const Quote = useSelector( state => state.quote)
    const Author = useSelector (state => state.author)
    return (
        <div className='app'>
            <div className='container'>
                <Button className='link' style={{width:500,}} variant="contained" color="secondary">
                    <Link style={{textDecoration:'none', color:'white', width:500, height:25}} to ='/'>
                    Back to home
                    </Link>

                </Button>
                <div className='button'>   
                    <Button style={{width:500}}onClick={handleSubmit} variant="contained" color="primary">
                        Click to search for a random quote
                    </Button>
                </div>
                {Quote !== '' && 
                
                <div className='card'>
                    <div className='Quote'> {Quote !== '' && <div>{Quote}</div>}</div>
                    <div className='Quote'> {Quote !== '' && <div>-{Author}</div>}</div>
                </div>
                }
            </div>
        </div>
    )
}
