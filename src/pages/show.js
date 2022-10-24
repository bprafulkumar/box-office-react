import React, { useEffect,useReducer } from "react";

import { useParams } from "react-router";
import { apiget } from "../misc/config";


const reducer = (prevState,action) => {
    switch (action.type) {
        case "FETCH_SUCCESSFUL":
            return {isLoading:false,error:null, show:action.show}
        
        case "FETCH_FAILURE":
            return {...prevState , isLoading:false , error : action.error}
            
            break;
    
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
    
    // const [show , setShow] = useState(null)
    // const [isLoading , setIsLoading] = useState(true)
    // const [error , setError] = useState(null)

    const { id } = useParams()
    // console.log(Params)
    useEffect(() => {

        let isMount = true
        apiget(`/shows/${id}?embed[]=seasons&embed[]=cast`).then((result)=>{

            setTimeout(() => {
                if(isMount){
                    dispatch({type: "FETCH_SUCCESSFUL", show:result})
                    // setShow(result)
                    // setIsLoading(false)
                }
                
            }, 1000);

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
        
    //  if(isLoading) {
    //         return <div>The data is rendered</div>
    //     }


    // if(error){
    //     return <div>Error throwing : {error}</div>
    // }
    
    return(
        <div>
            my name is bull
        </div>
    )
}

export default Showpage