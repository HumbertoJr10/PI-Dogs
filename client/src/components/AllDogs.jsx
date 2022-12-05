import React from "react"
import Dogs from "./Dogs"
import { useSelector } from "react-redux"


export default function AllDogs (props) {

    const dogs = useSelector( state => state.dog)



    return (
        <div> 
            {
                dogs?.map( e => {
                    return <Dogs 
                        name={e.name}
                        height={e.height} 
                        weight={e.weight} 
                        life_span={e.life_span}
                        image={e.image}
                        key={e.id}
                        temperament={e.temperament}
                    />
                })
            }
        </div>     
    )
}