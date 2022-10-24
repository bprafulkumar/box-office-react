import React, { useEffect,useState } from "react";
import { useParams } from "react-router";
import { apiget } from "../misc/config";


const Showpage = () => {
    
    const [show , setShow] = useState(null)
    const [isLoading , setIsLoading] = useState(true)
    const [error , setError] = useState(null)

    const { id } = useParams()
    // console.log(Params)
    useEffect(() => {

        let isMount = true
        apiget(`/shows/${id}?embed[]=seasons&embed[]=cast`).then((result)=>{

            setTimeout(() => {
                if(isMount){
                    setShow(result)
                    setIsLoading(false)
                }
                
            }, 1000);

        }).catch((err) => {
            if(isMount){
                setError(err.message)
                setIsLoading(false)
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
            my name is bull
        </div>
    )
}

export default Showpage