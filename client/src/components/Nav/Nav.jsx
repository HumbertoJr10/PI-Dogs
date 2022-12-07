import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from './Nav.module.css'
import { orderAZ, orderZA, orderByApi, orderByDb, changePage} from "../../redux/action/action"

export default function Nav() {
    const [order, setOrder] = useState(false)
    const [apiOrder, setApiOrder] = useState(false)
    const pages = useSelector(state => state.pages)

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
        dispatch(changePage(1))
    }

    const handlerDbOrder = () => {
        setApiOrder(false)
        dispatch(orderByDb())
        dispatch(changePage(1))
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