import React from 'react'
import { useSelector } from 'react-redux'
import SearchBarQuote from './SearchBarQuote'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

export default function SearchName() {
    const Author = useSelector( state => state.author)
    const Quote = useSelector (state => state.quote)
    return (
        <div>
            <div className='container'>
                <Button className='link' style={{width:500,}} variant="contained" color="secondary">
                    <Link style={{textDecoration:'none', color:'white', width:500, height:25}} to ='/'>
                    Back to home
                    </Link>
                </Button>
                <SearchBarQuote/>

                {Author !== '' && 
                
                <div className='card'>
                    <div className='Quote'> {Quote !== '' && <div>{Quote}</div>}</div>
                    <div className='Quote'> {Quote !== '' && <div>-{Author}</div>}</div>
                </div>
                }
            </div>
        </div>
    )
}
