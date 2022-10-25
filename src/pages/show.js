import React, { useEffect,useReducer } from "react";

import { useParams } from "react-router";
import Cast from "../components/show/cast";
import Details from "../components/show/Details";
import Seasons from "../components/show/seasons";
import ShowMainData from "../components/show/showMainData";
import { apiget } from "../misc/config";


const reducer = (prevState,action) => {
    switch (action.type) {
        case "FETCH_SUCCESSFUL":
            return {isLoading:false,error:null, show:action.show}
        
        case "FETCH_FAILURE":
            return {...prevState , isLoading:false , error : action.error}
    
        default: return prevState
           
    }
}

const Intialvalue = {
    show:null,
    isLoading : true ,
    error : true
}


const Showpage = () => {


    const [{show, isLoading, error}, dispatch] = useReducer(reducer, Intialvalue)

    console.log(show)
    
    // const [show , setShow] = useState(null)
    // const [isLoading , setIsLoading] = useState(true)
    // const [error , setError] = useState(null)

    const { id } = useParams()
    // console.log(Params)
    useEffect(() => {

        let isMount = true
        apiget(`/shows/${id}?embed[]=seasons&embed[]=cast`).then((result)=>{
            if(isMount){
                dispatch({type: "FETCH_SUCCESSFUL", show:result})
        }

        }).catch((err) => {
            if(isMount){
                dispatch({type: "FETCH_FAILURE", error:err.message})
                // setError(err.message)
                // setIsLoading(false)
            }
        })
        return () => {
            isMount =false
        }
    },[id])
        
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