import { useState,useEffect, useReducer } from "react";
import { apiget } from "../misc/config";

function showsReducer(prevState,action){
    switch (action.type) {
        case "ADD": {
           return [...prevState,action.showId]
        }
        
        case "REMOVE": {
            return prevState.filter(showId=> showId !== action.showId)
        }
            
        default:
           return prevState
    }
}

function usePersistantReducer(reducer,initialState ,key){

    const [state , dispatch] = useReducer(reducer,initialState,(initial) => {
        const persistant = localStorage.getItem(key)

        return persistant ? JSON.parse(persistant) : initial
    })

    useEffect(() =>{
        localStorage.setItem(key,JSON.stringify(state))

    }, [state,key])
    return [state ,dispatch]
}

export function useShows(key = "show"){
    return usePersistantReducer(showsReducer, [],key)
}

export function useLastQuery(key = "lastQuery"){
    const [input , SetInput] = useState(() => {
    const persistant = sessionStorage.getItem(key)

    return persistant ? JSON.parse(persistant) : "";
    })

    const setPersistantInput = (newState) =>{
        SetInput(newState)
        sessionStorage.setItem(key, JSON.stringify(newState))
    }
    return [input , setPersistantInput]
}


const reducer = (prevState,action) => {
    switch (action.type) {
        case "FETCH_SUCCESSFUL":
            return {isLoading:false,error:null, show:action.show}
        
        case "FETCH_FAILURE":
            return {...prevState , isLoading:false , error : action.error}
    
        default: return prevState
           
    }
}

export function useShow(showId){
    const [state, dispatch] = useReducer(reducer, 
        {
            show:null,
            isLoading : true ,
            error : true
        })

    useEffect(() => {

        let isMount = true
        apiget(`/shows/${showId}?embed[]=seasons&embed[]=cast`).then((result)=>{
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
    },[showId])

    return state
}