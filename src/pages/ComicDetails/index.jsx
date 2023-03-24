import React from "react";
import { useParams } from "react-router-dom";


import { ContainerComicDetails} from "./styles";


export default function ComicDetails() {

    const {id} = useParams()

    console.log(id);

    return (
        <ContainerComicDetails>

        </ContainerComicDetails>
    )
}