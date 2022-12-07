// importar actions
import { ADD_DOG, GET_DOGS, ORDER_AZ, ORDER_ZA } from "../action/action"
//------------------

const initialState = {
    dog: [],
    temperament: [],
    dogRespaldo: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_DOG:
            return {
                ...state,
                character: [...state.character, payload]
            }
        case GET_DOGS:
            return {
                ...state, 
                dog: [...state.dog, ...payload],
                dogRespaldo: [...state.dog, ...payload]
            }
        case ORDER_AZ:
            return {
                ...state,
                dog: [...state.dog].sort((x,y) => x.name.localeCompare(y.name))
            }
        case ORDER_ZA:
            return {
                ...state,
                dog: [...state.dog].sort((x,y) => y.name.localeCompare(x.name))
            }

        default:
            return {...state}
    }
}

export default reducer