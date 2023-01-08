import axios from 'axios'
import { API_URL } from '../../config'
//-------ACTION TYPES -----------

export const ADD_DOG = 'ADD_DOG'
export const GET_DOGS = 'GET_DOGS'
export const RESET_DOGS = 'RESET_DOGS'
export const GET_ONE_DOG = 'GET_ONE_DOG'
export const RESET_DETAIL = 'RESET_DETAIL'
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT'
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
export const SEARCH_DOG = 'SEARCH_DOG'
export const RESET = 'RESET'
export const FILTER_BY_TEMPERAMENT = 'FILTER_BY_TEMPERAMENT'
export const DARK_MODE = 'DARK_MODE'
export const USER_LOGED = 'USER_LOGED'
export const USER_LOGOUT = 'USER_LOGOUT'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const CREATE_USER = 'CREATE_USER'
export const DELETE_BREED = 'DELETE_BREED'
export const CHANGE_PROFILE_PIC = 'CHANGE_PROFILE_PIC'


//------------------------------

export function darkMode (status) {
    return {
        type: DARK_MODE,
        payload: status
    }
}

export function resetDog() {
    return {
        type: RESET_DOGS,
        payload: []
    }
}

export function createUser(user) {
    return async function (dispatch) {
        const data = axios.post(`${API_URL}/user`, user)
        .then( res => {
            dispatch ({
                type: CREATE_USER,
                payload: [res.data]
            })
        })
    }
}

export function userLoged (username) {
    return {
        type: USER_LOGED,
        payload: username
    }
}

export function userLogout () {
    return {
        type: USER_LOGOUT,
        payload: []
    }
}

export function getAllUsers () {
    return async function (dispatch) {
        return fetch(`${API_URL}/user`)
        .then( res => res.json())
        .then( data => {
            dispatch({
                type: GET_ALL_USERS,
                payload: data
            })
        })
    }
}

export function filterTemperament (temperament) {
    return {
        type: FILTER_BY_TEMPERAMENT,
        payload: temperament
    }
}

export function getOneDog (id) {
    return async function (dispatch) {
        return fetch(`${API_URL}/dogs/${id}`)
        .then( res => res.json())
        .then( data => {
            dispatch({
                type: GET_ONE_DOG,
                payload: data
            })
        })
    }
}

export function resetDetail () {
    return {
        type: RESET_DETAIL,
        payload: []
    }
}

export function addDog (dog) {

    return async function (dispatch) {
        const res = await axios.post(`${API_URL}/dogs`, dog);
        console.log(res)
        dispatch({
            type: ADD_DOG,
            payload: res
        })
    }
}

export function deleteDog(id) {

    return async function (dispatch) {
        const response = await axios.delete(`${API_URL}/dogs/${id}`)
        dispatch({
            type: DELETE_BREED,
            payload: id
        })
    }
}

export function getDogs () {
    return async function (dispatch) {
        return fetch(`${API_URL}/dogs`)
        .then( res => res.json())
        .then( data => {
            dispatch({
                type: GET_DOGS,
                payload: data
            })
        })
    }
}

export function getTemperament () {
    return async function (dispatch) {
        return fetch(`${API_URL}/temperaments`)
        .then( res => res.json())
        .then ( data => {
            dispatch({
                type: GET_TEMPERAMENT,
                payload: data
            })
        })
    }
}

export function searchDog (nombre) {
    return async function (dispatch) {
        return fetch(`${API_URL}/dogs?name=${nombre}`)
        .then( res => res.json())
        .then( data => {
            dispatch({
                type: SEARCH_DOG,
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

export function changeProfilePic(id, profile_Picture) {
    return async function (dispatch) {
        const modify = axios.put(`${API_URL}/user/${id}`, profile_Picture)
            .then( res => {
                const {data} = res
                dispatch({
                    type: CHANGE_PROFILE_PIC,
                    payload: data
                })
            })
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

export function reset() {
    return {
        type: RESET
    }
}