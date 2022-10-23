import React, {useState} from "react";
import MainpageLayout from "../components/MainpageLayout";

const Home = () => {

    const [input , SetInput] = useState("")
    
    const onSearch = () => {
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then((res) => res.json()).then((result) => console.log(result))
    }

    const onInputChange = (e) => {
        SetInput(e.target.value)
    }

    const onKeyDown = (ev) => {
        console.log(ev.keyCode)
        if(ev.keyCode === 13){
            onSearch()
        }
    }
    return(
        <div>
           <MainpageLayout> THIS IS THE HOME PAGE </MainpageLayout>
            <input type="text" onChange={onInputChange} value={input} onKeyDown={onKeyDown} ></input>
            <button onClick={onInputChange}>SEARCH</button>
        </div>

    )
}

export default Home