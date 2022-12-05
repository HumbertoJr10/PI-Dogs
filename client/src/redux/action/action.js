//-------ACTION TYPES -----------

export const ADD_DOG = 'ADD_DOG'
export const GET_DOGS = 'GET_DOGS'

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