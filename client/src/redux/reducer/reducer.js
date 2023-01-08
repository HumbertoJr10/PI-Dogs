// importar actions
import { 
    ADD_DOG, 
    GET_DOGS,
    GET_ONE_DOG,
    RESET_DETAIL,
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
    GET_TEMPERAMENT,
    FILTER_BY_TEMPERAMENT,
    DARK_MODE,
    USER_LOGED,
    GET_ALL_USERS,
    CREATE_USER,
    USER_LOGOUT,
    DELETE_BREED,
    CHANGE_PROFILE_PIC,
    RESET_DOGS
} from "../action/action"
//------------------

const initialState = {
    pages: 1,
    userLoged: [],
    allUser: [],
    dog: [],
    dogDetail: [],
    temperament: [],
    dogRespaldo: [],
    DarkMode: false
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case DARK_MODE:
            return {
                ...state,
                DarkMode: payload
            }
        case RESET_DOGS:
            return {
                ...state,
                dog: payload
            }
        case GET_ALL_USERS:
            return {
                ...state,
                allUser: [...payload]
            }
        case USER_LOGED: 
            return {
                ...state,
                userLoged: [[...state.allUser].find(e => e.username == payload)]
            }
        case USER_LOGOUT:
            return {
                ...state,
                userLoged: payload
            }
        case CREATE_USER:
            return {
                ...state,
                allUser: [...state.allUser, ...payload],
            }
        case ADD_DOG:
            return {
                ...state,
                character: [ payload, ...state.character]
            }
        case DELETE_BREED:
            return {
                ...state,
                dog: [...state.dog].filter(e=> e.id!=payload),
                dogRespaldo: [...state.dogRespaldo].filter(e => e.id!=payload)
            }
        case GET_DOGS:
            return {
                ...state, 
                dog: [...payload],
                dogRespaldo: [...payload]
            }
        case GET_ONE_DOG:
            return {
                ...state,
                dogDetail: payload
            }
        case RESET_DETAIL:
            return {
                ...state,
                dogDetail: payload
            }
        case FILTER_BY_TEMPERAMENT:
            return {
                ...state,
                dog: payload
            }
        case GET_TEMPERAMENT:
            return {
                ...state,
                temperament: [...payload].sort( (x,y) => x.name.localeCompare(y.name))
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
        case CHANGE_PROFILE_PIC:
            return {
                ...state,
                userLoged: [payload]
            }
        case CHANGE_PAGE:
            return {
                ...state,
                pages: payload
            }
        case FILTER_MAX_HEIGHT:
            return {
                ...state,
                dog: [...state.dog].sort((x,y) => parseInt(y.heightMax) - parseInt(x.heightMax))
            }
        case FILTER_MIN_HEIGHT:
            return {
                ...state,
                dog: [...state.dog].sort((x,y) => parseInt(x.heightMin) - parseInt(y.heightMin))
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