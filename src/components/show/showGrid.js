import React from "react";
import ShowCard from "./showCard";
import IMAGE_NOT_FOUND from "../../images/not-found.png"
import { FlexGrid } from "../styled";
import { useShows } from "../../misc/custom-hook";

const ShowGrid = ({data}) => {

    const [starredShow , dispatchStarred] = useShows()

    return(
        <FlexGrid>
        {
          data && data.map((value) => {
        
            const isStarred = starredShow.includes(value.show.id)

            const onStarClick = () =>{
                if(isStarred) {
                    dispatchStarred({type:"REMOVE", showId:value.show.id})
                }else{
                    dispatchStarred({type:"ADD", showId:value.show.id})
                }
            }
            return(
                <ShowCard 
                key={value.show.id} 
                id={value.show.id} 
                name ={value.show.name}
                image ={value.show.image ? value.show.image.medium : IMAGE_NOT_FOUND}
                summary ={value.show.summary}
                onStarClick = {onStarClick}
                isStarred={isStarred}
                />
            )
          })
        }
        </FlexGrid>
    )
}

export default ShowGrid