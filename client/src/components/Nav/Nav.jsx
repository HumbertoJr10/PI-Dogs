import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from './Nav.module.css'
import { orderAZ, orderZA } from "../../redux/action/action"

export default function Nav() {
    const [order, setOrder] = useState(false)
    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dog)

    const aZOrder = () => {
        dispatch(orderAZ())
        setOrder(true)
        console.log(dogs)
    }

    const zAOrder = () => {
        dispatch(orderZA())
        setOrder(false)
        console.log(dogs)
    }

    return (
        <div className={styles.container}>
            <img src="logo.png"/>
            {!order?
                <button onClick={aZOrder}>Az</button>:
                <button onClick={zAOrder}>Za</button>}
        </div>
    )
}