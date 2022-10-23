import React, {useState} from "react";
import MainpageLayout from "../components/MainpageLayout";
import { apiget } from "../misc/config";

const Home = () => {

    const [input , SetInput] = useState("")
    const [results , setResults] = useState(null);
    const [searchOptions , setsearchOptions] = useState("shows")
    const isShowsinput= searchOptions === "shows"
    
    const onSearch = () => {
        apiget(`/search/${searchOptions}?q=${input}`).then((result) =>
        setResults(result))

        // fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then((res) => res.json()).then((result) => 
        // setResults(result))
    }

    const onInputChange = (e) => {
        SetInput(e.target.value)
    }

    const onRadiochange = (e) => {
        setsearchOptions(e.target.value)
        
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
                return results[0].show ? <div>{results.map((items)=>
                <div key={items.show.id}>{items.show.name}</div>)}
                </div> : <div>{results.map((items)=>
                <div key={items.person.id}>{items.person.name}</div>)}
                </div>
        }
        return null
    }
    return(
        <div>
           <MainpageLayout> THIS IS THE HOME PAGE </MainpageLayout>
            <input type="text" onChange={onInputChange} value={input} onKeyDown={onKeyDown} placeholder="Search for Something" ></input>

            <div>
                <label>MOVIE
                <input id="shows-search" type="radio" value="shows" onChange={onRadiochange} checked={isShowsinput}></input>
                </label>

                <label>ACTORS
                <input id="actors-search" type="radio" value="people" onChange={onRadiochange} checked ={!isShowsinput} ></input>
                </label>
            </div>

            <button type="button" onClick={onSearch}>SEARCH</button>
           {
            renderItems()
           }
        </div>

    )
}

export default Home