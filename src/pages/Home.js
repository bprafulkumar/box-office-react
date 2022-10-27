import React, {useState} from "react";
import ActorGrid from "../components/actor/actorGrid";
import MainpageLayout from "../components/MainpageLayout";
import ShowGrid from "../components/show/showGrid";
import { apiget } from "../misc/config";
import { useLastQuery } from "../misc/custom-hook";
import { SearchInput, SearchButtonWrapper,RadioInputsWrapper } from "./Home.styled";
import { CustomRadio } from "../components/CustomRadio"


const Home = () => {

    const [input , SetInput] = useLastQuery()
    const [results , setResults] = useState(null);
    const [searchOptions , setsearchOptions] = useState("shows")
    const isShowsinput= searchOptions === "shows"
    
    const onSearch = () => {
        apiget(`/search/${searchOptions}?q=${input}`).then(result => {
        setResults(result)
        })
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
                return (results[0].show ? 

                <ShowGrid data={results}/> : <ActorGrid data={results}/>
                )
        }
        return null
    }
    return(
        <div>
           <MainpageLayout/>
            <SearchInput type="text" onChange={onInputChange} value={input} onKeyDown={onKeyDown} placeholder="Search for Something" ></SearchInput>

            <RadioInputsWrapper>
                <div> 
                    <CustomRadio 
                        label = "Shows"
                        value="shows" 
                        id="shows-search" 
                        checked={isShowsinput}
                        onChange={onRadiochange} 
                    />
                </div>

                <div>
                    <CustomRadio 
                        label = "Actor"
                        id="actors-search" 
                        value="people" 
                        checked={!isShowsinput}
                        onChange={onRadiochange} 
                    />
                </div>
            </RadioInputsWrapper>

            <SearchButtonWrapper>
            <button type="button" onClick={onSearch}>SEARCH</button>
            </SearchButtonWrapper>
           {
            renderItems()
           }
        </div>

    )
}

export default Home