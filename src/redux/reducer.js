import { GET_RANDOM, GET_NAME, GET_RANDOM_QUOTE  } from './constants'
const initialState = {
    name: '',
    ocupation:'',
    status: '',
    alias: '',
    img: '',
    author:'',
    quote:''


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



        default:
            return state
    }
}
export default rootReducer