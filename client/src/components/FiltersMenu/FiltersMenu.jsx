import React from "react";
import { useDispatch } from "react-redux";
import styles from './FiltersMenu.module.css'
import { orderAZ, orderZA, orderByApi, orderByDb, changePage, orderByAll, filterByMaxHeight, filterByMinHeight, filterByMaxWeigth, filterByMinWeigth} from "../../redux/action/action"
import { useState } from "react";



export default function FilterMenu() {
    const dispatch = useDispatch()
    const [Open, setOpen] = useState(false)
    const [AlphabeticMenu, setAlphabeticMenu] = useState(false)
    const [FilterMenu, setFilterMenu] = useState(false)
    const [HeightMax, setHeightMax] = useState(false) // Estado local para controlar el boton Heigth
    const [WeigthMax, setWeigthMax] = useState(false) // Estado Local para controlar el boton Weigth

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

    const HeightOrder = () => {
        if (!HeightMax) {
            dispatch(filterByMaxHeight())
            dispatch(changePage(1))
            setHeightMax(!HeightMax)
        } else {
            dispatch(filterByMinHeight())
            dispatch(changePage(1))
            setHeightMax(!HeightMax)
        }
    }

    const WeigthOrder = () => {
        if (!WeigthMax) {
            dispatch(filterByMaxWeigth())
            dispatch(changePage(1))
            setWeigthMax(!WeigthMax)
        } else {
            console.log('Ordena por peque')
            dispatch(filterByMinWeigth())
            dispatch(changePage(1))
            setWeigthMax(!WeigthMax)
        }
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
                    <div onClick={HeightOrder} className={styles.SubMenuItems}>
                        {
                            !HeightMax?"Height Max":"Height Min"
                        }
                    </div>
                    <div onClick={WeigthOrder} className={styles.SubMenuItemsFinal}>
                        {
                            !WeigthMax?"Weigth Max":"Weigth Min"
                        }
                    </div>
                </div>)
            }
        </div>

    )
}
