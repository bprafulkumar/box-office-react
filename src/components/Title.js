import React from "react";
import { TitleWrapper } from "./Title.styled";

const Title = (props) => {
    return (
        <TitleWrapper>
            <h1>{props.Heading}</h1>
            <p>{props.subheading}</p>
        </TitleWrapper>
    )
}

export default Title