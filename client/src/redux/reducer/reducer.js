// importar actions
import { 
    ADD_DOG, 
    GET_DOGS, 
    ORDER_AZ, 
    ORDER_ZA, 
    ORDER_BY_API, 
    ORDER_BY_DB, 
    CHANGE_PAGE,
    ORDER_BY_ALL,
    FILTER_MAX_HEIGHT,
    FILTER_MIN_HEIGHT,
    FILTER_MAX_WEIGTH,
    FILTER_MIN_WEIGTH,
    SEARCH_DOG,
    RESET,
    GET_TEMPERAMENT
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
                dog: [...payload],
                dogRespaldo: [...payload]
            }
        case GET_TEMPERAMENT:
            return {
                ...state,
                temperament: [...payload]
            }
        
        case SEARCH_DOG:
            return {
                ...state,
                dog: payload
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

        case FILTER_MAX_HEIGHT:
            return {
                ...state,
                dog: [...state.dog].sort((x,y) => y.heightMax.localeCompare(x.heightMax))
            }
        case FILTER_MIN_HEIGHT:
            return {
                ...state,
                dog: [...state.dog].sort((x,y) => x.heightMin.localeCompare(y.heightMin))
            }
        case FILTER_MAX_WEIGTH: 
            return {
                ...state,
                dog: [...state.dog].sort((x,y) => parseInt(y.weightMax) - parseInt(x.weightMax))
            }

        case FILTER_MIN_WEIGTH:
            return {
                ...state,
                dog: [...state.dog].sort((x,y) => parseInt(x.weightMin) - parseInt(y.weightMin))
            }
        case RESET:
            return {
                ...state,
                dog: []
            }
        default:
            return {...state}
    }
}

export default reducer