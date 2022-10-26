import React from "react";

import { useParams } from "react-router";
import Cast from "../components/show/cast";
import Details from "../components/show/Details";
import Seasons from "../components/show/seasons";
import ShowMainData from "../components/show/showMainData";

import { useShow } from "../misc/custom-hook";



const Showpage = () => {
    
    const { id } = useParams()
    const {show, isLoading, error} = useShow(id)
    
        
     if(isLoading) {
            return <div>The data is rendered</div>
        }


    if(error){
        return <div>Error throwing : {error}</div>
    }
    
    return(
        <div>
            <ShowMainData image={show.image} name={show.name} rating ={show.rating} summary = {show.summary} tags = {show.genres} />

            <div>
            <h1>Details</h1>
            <Details status = {show.status} network={show.network} premiered = {show.premiered}/>
            </div>

            <div>
            <h1>seasons</h1>
            <Seasons seasons = {show._embedded.seasons} />
            </div>

            <div>
                <h1>Cast</h1>
            <Cast cast = {show._embedded.cast}/>
            </div>
        </div>
    )
}

export default Showpage