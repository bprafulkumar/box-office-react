import React from "react";

const Title = (props) => {
    return (
        <div>
            <h1>{props.Heading}</h1>
            <p>{props.subheading}</p>
        </div>
    )
}

export default Title