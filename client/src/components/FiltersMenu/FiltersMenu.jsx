import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './FiltersMenu.module.css'
import { orderAZ, orderZA, orderByApi, orderByDb, changePage, orderByAll} from "../../redux/action/action"
import { useState } from "react";



export default function FilterMenu() {
    const dispatch = useDispatch()

    const [Open, setOpen] = useState(false)
    const [AlphabeticMenu, setAlphabeticMenu] = useState(false)
    const [FilterMenu, setFilterMenu] = useState(false)


    function MenuShow () {
        setOpen(!Open)
        setAlphabeticMenu(false)
        setFilterMenu(false)
    }
    
    function MenuAlphabetic () {
        setAlphabeticMenu(!AlphabeticMenu)
        setOpen(false)
        setFilterMenu(false)
    }

    function MenuFilter() {
        setFilterMenu(!FilterMenu)
        setOpen(false)
        setAlphabeticMenu(false)
    }

    const OrderA_Z = () => {
        dispatch(orderAZ())
        setAlphabeticMenu(false)
    }

    const OrderZ_A = () => {
        dispatch(orderZA())
        setAlphabeticMenu(false)
    }

    const OrderApi = () => {
        dispatch(orderByApi())
        dispatch(changePage(1))
        
        setOpen(!Open)
    }

    const OrderDatabase = () => {
        dispatch(orderByDb())
        dispatch(changePage(1))
        setOpen(!Open)
    }
    
    const OrderAll = () => {
        dispatch(orderByAll())
        setOpen(!Open)
    }



    return (
        <div>
            <div className={styles.MenuBar}>
                <p onClick={MenuShow} className={!Open?styles.MenuButton:styles.MenuButtonSelected}>To show</p>
                <p onClick={MenuAlphabetic} className={!AlphabeticMenu?styles.MenuButton:styles.MenuButtonSelected}>Alphabetic</p>
                <p onClick={MenuFilter} className={!FilterMenu?styles.MenuButton:styles.MenuButtonSelected}>Filters</p>
            </div>
            {
            Open&&(<div className={styles.SubMenuDiv}>
                <div onClick={OrderAll} className={styles.SubMenuItems}>All</div>
                <div onClick={OrderApi} className={styles.SubMenuItems}>Api</div>
                <div onClick={OrderDatabase} className={styles.SubMenuItemsFinal}>Created</div>
            </div>)
            }
            {
            AlphabeticMenu&&(<div className={styles.SubMenuDiv}>
                <div onClick={OrderA_Z} className={styles.SubMenuItems}>Order A-Z</div>
                <div onClick={OrderZ_A} className={styles.SubMenuItemsFinal}>Order Z-A</div>
                
            </div>)
            }
            {
                FilterMenu&&(<div className={styles.SubMenuDiv}>
                    <div onClick={OrderA_Z} className={styles.SubMenuItems}>Weigth</div>
                    <div onClick={OrderZ_A} className={styles.SubMenuItemsFinal}>Height</div>
                </div>)
            }
        </div>

        )
}



     /*
        <div>
            <div className={styles.container}>
                <div className={styles.elementColumn}>
                        <p className={styles.textOrder}> Show </p>
                    <div className={styles.ElementOrderSide}>
                        <button onClick={OrderApi} className={Api? styles.imageOrderClicked : styles.imageOrder}>Api</button>
                        <button onClick={OrderDatabase} className={Database? styles.imageOrderClicked : styles.imageOrder}>Created</button>
                        <button onClick={OrderAll} className={ALL? styles.imageOrderClicked : styles.imageOrder}>All</button>
                    </div>
                </div>

            <div className={styles.alphabeticColumn}>
                    <p className={styles.textOrder}> Alphabetic</p>
                <div className={styles.alphabeticOrderSide}>
                    <button className={AZ? styles.imageOrderClicked : styles.imageOrder} onClick={OrderA_Z}>A-Z</button>
                    <button className={ZA? styles.imageOrderClicked : styles.imageOrder} onClick={OrderZ_A}>Z-A</button>
                </div>
            </div>

            <div className={styles.orderListColumn}> 
                <p className={styles.textOrder}> Order </p>
                <div className={styles.List}>
                <select >
                    <option value={'Peso'}>Peso</option>
                    <option value={'Peso'}>Tamaño</option>
                </select>
                <select >
                    <option value={'Peso'}>Peso</option>
                    <option value={'Peso'}>Tamaño</option>
                </select>
                </div>
            </div>
            </div>
        </div>
    )
    */