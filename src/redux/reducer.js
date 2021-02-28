import { GET_RANDOM,  } from './constants'
const initialState = {
    name: '',
    ocupation:'',
    status: '',
    alias: '',
    img: ''


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


        default:
            return state
    }
}
export default rootReducer