import React from 'react'
import { useSelector } from 'react-redux'
import SearchBar from './SearchBar'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

export default function SearchName() {
    const Name = useSelector( state => state.name)
    const Alias = useSelector (state => state.alias)
    const Status = useSelector (state => state.status)
    const Occupation = useSelector(state => state.ocupation)
    const Img = useSelector(state => state.img)
    return (
        <div>
            <div className='container'>
                <Button className='link' style={{width:500,}} variant="contained" color="secondary">
                    <Link style={{textDecoration:'none', color:'white', width:500, height:25}} to ='/'>
                    Back to home
                    </Link>
                </Button>
                <SearchBar/>

                {Name !== '' && 
                
                <div className='card'>
                    <div className='img'>{Name !== '' &&  <img className='img' alt='Imagen:' src={Img}></img>}</div>
                    <div className=''> {Name !== '' && <div>Name: {Name}</div>}</div>
                    <div className=''> {Name !== '' && <div>Occupation: {Occupation}</div>}</div>
                    <div className=''> {Name !== '' && <div>Status: {Status}</div>}</div>
                    <div className=''> {Name !== '' && <div>Alias: {Alias}</div>}</div>
                </div>
                }
            </div>
        </div>
    )
}
