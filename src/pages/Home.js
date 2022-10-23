import React, {useState} from "react";
import MainpageLayout from "../components/MainpageLayout";
import { apiget } from "../misc/config";

const Home = () => {

    const [input , SetInput] = useState("")
    const [results , setResults] = useState(null);
    
    const onSearch = () => {
        apiget(`/search/shows?q=${input}`).then((result) => 
        setResults(result))
        // fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then((res) => res.json()).then((result) => 
        // setResults(result))
    }

    const onInputChange = (e) => {
        SetInput(e.target.value)
    }

    const onKeyDown = (ev) => {
        // console.log(ev.keyCode)
        if(ev.keyCode === 13){
            onSearch()
        }
    }

    const renderItems = () => {
        if(results && results.length === 0){
            return (<div>NO RESULTS</div>);
        }

        if(results && results.length > 0){
                return <div>{results.map((items)=><div key={items.show.id}>{items.show.name}</div>)}</div>
        }
        return null
    }
    return(
        <div>
           <MainpageLayout> THIS IS THE HOME PAGE </MainpageLayout>
            <input type="text" onChange={onInputChange} value={input} onKeyDown={onKeyDown} ></input>
            <button type="button" onClick={onInputChange}>SEARCH</button>
           {
            renderItems()
           }
        </div>

    )
}

export default Home