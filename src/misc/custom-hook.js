import { useEffect, useReducer } from "react";

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