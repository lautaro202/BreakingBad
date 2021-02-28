import React from 'react'
import './Random.scss'
import {getRandom} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'


export default function Random() {  
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getRandom())
    }
    const Name = useSelector( state => state.name)
    const Alias = useSelector (state => state.alias)
    const Status = useSelector (state => state.status)
    const Occupation = useSelector(state => state.ocupation)
    const Img = useSelector(state => state.img)
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
                        Click to search for a random character
                    </Button>
                </div>
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
