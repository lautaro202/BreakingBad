import React from 'react'
import './Home.scss'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        
        <div className='container'>
            <div></div>
            <div className='image'><img alt='no se cargo la imagen' style={{height:103, width:150}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1200px-Breaking_Bad_logo.svg.png'></img></div>
            <div className='text'>
                <Link style={{textDecoration:'none', color:'red'}} to='/random'>Personaje Random</Link>
            </div>
            <div className='text'>
                <Link style={{textDecoration:'none'}} to='/admin'>Buscar por nombre</Link>
            </div>
            <div className='text'>
                <Link style={{textDecoration:'none'}} to='/admin'>Frase Aleatoria</Link>
            </div>
            <div className='text'>
                <Link style={{textDecoration:'none'}} to='/admin'>Buscar frase por personaje</Link>
            </div>
            <div className='text'>
                <Link style={{textDecoration:'none'}} to='/admin'>Muerte aleatoria</Link>
            </div>
            
        </div>
    )
}
