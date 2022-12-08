// importar actions
import { 
    ADD_DOG, 
    GET_DOGS, 
    ORDER_AZ, 
    ORDER_ZA, 
    ORDER_BY_API, 
    ORDER_BY_DB, 
    CHANGE_PAGE,
    ORDER_BY_ALL
} from "../action/action"
//------------------

const initialState = {
    pages: 1,
    dog: [],
    temperament: [],
    dogRespaldo: [],
    userLogged: []
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
        case ORDER_BY_ALL:
            return {
                ...state,
                dog: [...state.dogRespaldo]
            }

        case ORDER_BY_API:
            return {
                ...state,
                dog: state.dogRespaldo.filter( e => {
                    if (!isNaN(e.id)) {
                        return e
                    }
                } )
            }
        case ORDER_BY_DB:
            return {
                ...state,
                dog: state.dogRespaldo.filter( e => {
                    if (isNaN(e.id)) {
                        return e
                    }
                } )
            }
        case CHANGE_PAGE:
            return {
                ...state,
                pages: payload
            }

        default:
            return {...state}
    }
}

export default reducer