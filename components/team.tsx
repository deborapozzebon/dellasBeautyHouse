import React from "react";
import Person from "./person";

export default function Team() {
    let grasielaDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada tortor quis sapien tristique, et cursus eros congue. Nam blandit urna mauris, vitae scelerisque quam blandit sit amet.';
    return (
        <>
            <h1>Nossa equipe</h1>
            <br/>
            <Person image='\thumb_grasi.jpg' name='Grasiela Toss' description={grasielaDescription}/>
        </>
    )
}