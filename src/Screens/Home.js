import React from 'react'
import './Home.scss'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default function Home() {
    return (
        
        <div className='container'>
            <div></div>
            <div className='image'><img alt='no se cargo la imagen' style={{height:103, width:150}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1200px-Breaking_Bad_logo.svg.png'></img></div>
            <div className='text'>
                <Button style={{width:300}} variant="contained" color="primary">
                    <Link style={{textDecoration:'none', color:'black'}} to='/random'>Personaje Random</Link>
                </Button>
            </div>
            <div className='text'>
                <Button style={{width:300}} variant="contained" color="primary">
                    <Link style={{textDecoration:'none', color:'black'}} to='/admin'>Buscar por nombre</Link>
                </Button>
            </div>
            <div className='text'>
                <Button style={{width:300}} variant="contained" color="primary">
                    <Link  style={{textDecoration:'none', color:'black'}} to='/admin'>Frase Aleatoria</Link>
                </Button>
            </div>
            <div className='text'>
                <Button style={{width:300}} variant="contained" color="primary">
                    <Link  style={{textDecoration:'none', color:'black'}} to='/admin'>Buscar frase por personaje</Link>
                </Button>
            </div>
            <div className='text'>
                <Button style={{width:300}} variant="contained" color="primary">
                    <Link  style={{textDecoration:'none', color:'black'}} to='/admin'>Muerte aleatoria</Link>
                </Button>
            </div>
            
        </div>
    )
}
