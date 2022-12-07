import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from './Nav.module.css'
import { orderAZ, orderZA, orderByApi, orderByDb } from "../../redux/action/action"

export default function Nav() {
    const [order, setOrder] = useState(false)
    const [apiOrder, setApiOrder] = useState(false)
    const [dataBaseOrder, setDataBaseOrder] = useState(false)

    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dog)

    const aZOrder = () => {
        dispatch(orderAZ())
        setOrder(true)
    }
    const zAOrder = () => {
        dispatch(orderZA())
        setOrder(false)
        console.log(dogs)
    }

    const handlerapiOrder = () => {
        setApiOrder(true)
        dispatch(orderByApi())
    }

    const handlerDbOrder = () => {
        setApiOrder(false)
        dispatch(orderByDb())
    }

    return (
        <div className={styles.container}>
            
            {
                !order?
                <button onClick={aZOrder}>Az</button>:
                <button onClick={zAOrder}>Za</button>
            }
            {
                !apiOrder?
                <button onClick={handlerapiOrder}>API</button>:
                <button onClick={handlerDbOrder}>DB</button>
            }
        </div>
    )
}