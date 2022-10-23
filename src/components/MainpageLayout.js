import React from "react";
import Nav from "./Nav"
import Title from "./Title";

const MainpageLayout = (props) => {

    return(
        <div>
            <Title Heading="BOX OFFICE" subheading = "Are you looking for a movie or an actor"/>
            <Nav/>
            {
                props.children
            }
        </div>
    )
}

export default MainpageLayout