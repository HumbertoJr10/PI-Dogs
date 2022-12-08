import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './FiltersMenu.module.css'
import { orderAZ, orderZA, orderByApi, orderByDb, changePage, orderByAll} from "../../redux/action/action"
import { useState } from "react";


export default function FilterMenu() {
    const dogs = useSelector(state => state.dog)
    const dispatch = useDispatch()
    const [ AZ, setAZ ] = useState(false)
    const [ ZA, setZA ] = useState(false)
    const [Api, setApi] = useState(false)
    const [Database, setDatabase] = useState(false)
    const [ALL, setALL] = useState(true)

    const OrderA_Z = () => {
        dispatch(orderAZ())
        setAZ(true)
        setZA(false)
    }

    const OrderZ_A = () => {
        dispatch(orderZA())
        setAZ(false)
        setZA(true)
    }

    const OrderApi = () => {
        dispatch(orderByApi())
        dispatch(changePage(1))
        setApi(true)
        setDatabase(false)
        setALL(false)
        setAZ(false)
        setZA(false)
    }

    const OrderDatabase = () => {
        dispatch(orderByDb())
        dispatch(changePage(1))
        setApi(false)
        setDatabase(true)
        setALL(false)
        setAZ(false)
        setZA(false)
    }

    const OrderAll = () => {
        dispatch(orderByAll())
        setApi(false)
        setDatabase(false)
        setALL(true)
        setAZ(false)
        setZA(false)
    }



    return (
        <div className={styles.container}>
            <div>
                <p className={styles.textOrder}> Show </p>
                <button onClick={OrderApi} className={Api? styles.imageOrderClicked : styles.imageOrder}>Api</button>
                <button onClick={OrderDatabase} className={Database? styles.imageOrderClicked : styles.imageOrder}>Created</button>
                <button onClick={OrderAll} className={ALL? styles.imageOrderClicked : styles.imageOrder}>All</button>
            </div>
            <div>
                <p className={styles.textOrder}> Order</p>
                <button className={AZ? styles.imageOrderClicked : styles.imageOrder} onClick={OrderA_Z}>A-Z</button>
                <button className={ZA? styles.imageOrderClicked : styles.imageOrder} onClick={OrderZ_A}>Z-A</button>
            </div>
            
            <select >
                <option value={'Peso'}>Peso</option>
                <option value={'Peso'}>Tamaño</option>
            </select>

        </div>
    )

}