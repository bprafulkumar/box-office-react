import React from "react";
import ShowCard from "./showCard";
import IMAGE_NOT_FOUND from "../../images/not-found.png"

const ShowGrid = (props) => {
    return(
        <div>
        {
          props.data.map((value) =>
         
          <ShowCard 
            key={value.show.id} 
            id={value.show.id} 
            name ={value.show.name}
            image ={value.show.image ? value.show.image.medium : IMAGE_NOT_FOUND}
            summary ={value.show.summary}
            />)
        }
        </div>
    )
}

export default ShowGrid