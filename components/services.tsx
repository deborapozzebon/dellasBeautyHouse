import React from "react";
import Service from "./service";

export default function Services() {
    let makeDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada tortor quis sapien tristique, et cursus eros congue. Nam blandit urna mauris, vitae scelerisque quam blandit sit amet.';
    return (
        <>
            <h1>Serviços</h1>
            <br/>
            <Service image='\thumb_make.png' name='Maquiagem' description={makeDescription} />
        </>
    )
}