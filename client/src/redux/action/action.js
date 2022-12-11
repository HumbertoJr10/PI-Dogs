//-------ACTION TYPES -----------

export const ADD_DOG = 'ADD_DOG'
export const GET_DOGS = 'GET_DOGS'
export const ORDER_AZ = 'ORDER_AZ'
export const ORDER_ZA = 'ORDER_ZA'
export const ORDER_BY_ALL = 'ORDER_BY_ALL'
export const ORDER_BY_API = 'ORDER_BY_API'
export const ORDER_BY_DB = 'ORDER_BY_DB'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const FILTER_MAX_WEIGTH = 'FILTER_MAX_WEIGTH'
export const FILTER_MIN_WEIGTH = 'FILTER_MIN_WEIGTH'
export const FILTER_MAX_HEIGHT = 'FILTER_MAX_HEIGHT'
export const FILTER_MIN_HEIGHT = 'FILTER_MIN_HEIGHT'


//------------------------------

export function addDog (dog) {
    return {
        type: ADD_DOG,
        payload: dog
    }
}

export function getDogs () {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/dogs`)
        .then( res => res.json())
        .then( data => {
            dispatch({
                type: GET_DOGS,
                payload: data
            })
        })
    }
}

export function orderAZ () {
    return {
        type: ORDER_AZ,
        payload: true
    }
}

export function orderZA () {
    return {
        type: ORDER_ZA,
        payload: true
    }
}

export function orderByAll () {
    return {
        type: ORDER_BY_ALL,
        payload: true
    }
}



export function orderByApi () {
    return {
        type: ORDER_BY_API,
        payload: true
    }
}

export function orderByDb () {
    return {
        type: ORDER_BY_DB,
        payload: true
    }
}

export function changePage (numero) {
    return {
        type: CHANGE_PAGE,
        payload: numero
    }
}

export function filterByMaxWeigth () {
    return {
        type: FILTER_MAX_WEIGTH,
        payload: true
    }
}

export function filterByMinWeigth () {
    return {
        type: FILTER_MIN_WEIGTH,
        payload: true
    }
}

export function filterByMaxHeight () {
    return {
        type: FILTER_MAX_HEIGHT,
        payload: true
    }
}

export function filterByMinHeight () {
    return {
        type: FILTER_MIN_HEIGHT,
        payload: true
    }
}