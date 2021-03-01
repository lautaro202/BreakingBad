import axios from 'axios'

import {
    GET_RANDOM,
    GET_NAME
} from './constants'
import swal from 'sweetalert'


export function getRandom() {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/search/random`)
            .then((res) => res.data )
            .then ( data => {
                dispatch({ type: GET_RANDOM, payload:data})
                console.log(data)
            })
            .catch( () => swal ( "Oops" ,  "Hubo un error, por favor intentelo mas tarde!" ,  "error" ) )
    }
}



export function getName(query) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/search/characters?q=${query}`)
            .then((res) => res.data )
            .then ( data => {
                dispatch({ type: GET_NAME, payload:data})
                console.log(data)
            })
            .catch( () => swal ( "Oops" ,  "No se encontró el personaje, revisa si escribiste bien el nombre!" ,  "error" ) )
    }
}