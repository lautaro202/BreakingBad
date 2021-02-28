import axios from 'axios'

import {
    GET_RANDOM,
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
            .catch( () => swal ( "Oops" ,  "No se encontró la ciudad!" ,  "error" ) )
    }
}