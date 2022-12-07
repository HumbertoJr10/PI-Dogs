import React from "react"
import styled from "styled-components"

const ImageCard = styled.img`
width: 200px;
`
const CardContainer = styled.div`
    border: 1px solid black;
    width: 500px;
`

export default function Dogs ( { name, height, weight, life_span, image, temperament } ) {
    return (
        <CardContainer>
            <h1> {name || "undefined"} </h1>
            <ImageCard src={image|| "http://pawrider.com/assets/images/pages-loder.gif"} alt='none' />
        </CardContainer>
    )
}