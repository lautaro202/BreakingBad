import { GET_RANDOM, GET_NAME, GET_RANDOM_QUOTE, GET_QUOTE, GET_RANDOM_DEAD  } from './constants'
const initialState = {
    name: '',
    ocupation:'',
    status: '',
    alias: '',
    img: '',
    author:'',
    quote:'',
    death:'',
    cause:'',
    responsible: '',
    last_words:'',
    season:''


}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RANDOM: {
            return {
                ...state,
                name: action.payload[0].name,
                alias: action.payload[0].nickname,
                status: action.payload[0].status,
                img: action.payload[0].img,
                ocupation: action.payload[0].occupation[0]
            }
        }
        case GET_NAME: {
            return {
                ...state,
                name: action.payload[0].name,
                alias: action.payload[0].nickname,
                status: action.payload[0].status,
                img: action.payload[0].img,
                ocupation: action.payload[0].occupation[0]

            }
        }
        case GET_RANDOM_QUOTE: {
            return {
                ...state,
                author: action.payload[0].author,
                quote: action.payload[0].quote
            }
        }
        case GET_QUOTE: {
            return {
                ...state,
                author: action.payload[0].author,
                quote: action.payload[0].quote
            }
        }
        case GET_RANDOM_DEAD: {
            {console.log(action.payload)}
            return {
                ...state,
                death: action.payload.data.death,
                cause: action.payload.data.cause,
                last_words: action.payload.data.last_words,
                season: action.payload.data.season,
                responsible: action.payload.data.responsible,
                img: action.payload.data.img
            }
        }

        default:
            return state
    }
}
export default rootReducer