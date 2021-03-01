import React from 'react'
import './Random.scss'
import {getRandomDead} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'


export default function Random() {  
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getRandomDead())
        console.log('hola')
    }
    const Death = useSelector( state => state.death)
    const Cause = useSelector (state => state.cause)
    const Last_Words = useSelector(state=>state.last_words)
    const Responsible = useSelector(state => state.responsible)

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
                {Death !== '' && 
                
                <div className='card'>
                    <div className='img'>{Death !== '' &&  <img className='img' alt='Imagen:' src={Img}></img>}</div>
                    <div className=''> {Death !== '' && <div>Death: {Death}</div>}</div>
                    <div className=''> {Death !== '' && <div>Cuase: {Cause}</div>}</div>
                    <div className=''> {Death !== '' && <div>Last Words: {Last_Words}</div>}</div>
                    <div className=''> {Death !== '' && <div>Responsible: {Responsible}</div>}</div>
                </div>
                }
            </div>
        </div>
    )
}
