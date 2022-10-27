import React from "react";
import { useLocation } from "react-router";
// import { Link } from "react-router-dom";
import { NavList,LinkStyled } from "./Nav.styled";

const LINKS = [
    {to : "/" , text : "HOME"},
    {to : "/starred" , text : "STARRED"}
]
const Nav = () => {

    const location = useLocation()
     return (
        <NavList>
            {
                LINKS.map((val) => (
                <ul key={val.to}>
                    <li><LinkStyled to={val.to} className={val.to === location.pathname ? "active" : ''}>{val.text}</LinkStyled></li>
                </ul>
                ))
            }
           
        </NavList>
     )
}

export default Nav