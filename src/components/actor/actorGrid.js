import React from "react";
import ActorCard from "./actorcard";
import IMAGE_NOT_FOUND from "../../images/not-found.png"
import { FlexGrid } from "../styled";

const ActorGrid= (props) => {
    return(
        <FlexGrid>
            {
                props.data.map((value) => 
                <ActorCard 
                key={value.person.id}
                id = {value.person.id}
                name ={value.person.name}
                country = {value.person.country ? value.person.country.name : null}
                birthday = {value.person.birthday}
                deathday = {value.person.deathday}
                gender = {value.person.gender}
                image = {value.person.image ? value.person.image.medium : IMAGE_NOT_FOUND }
                />)
            }
        </FlexGrid>
    )
}

export default ActorGrid