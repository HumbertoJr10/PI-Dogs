// importar actions
import { ADD_DOG, GET_DOGS } from "../action/action"
//------------------

const initialState = {
    dog: [],
    temperament: []
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
                dog: [...state.dog, ...payload]
            }

        default:
            return {...state}
    }
}

export default reducer