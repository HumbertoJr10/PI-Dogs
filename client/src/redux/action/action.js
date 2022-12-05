//-------ACTION TYPES -----------

export const ADD_DOG = 'ADD_DOG'

//------------------------------

export function addDog (dog) {
    return {
        type: ADD_DOG,
        payload: dog
    }
}