import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
    {to : "/" , text : "HOME"},
    {to : "/starred" , text : "STARRED"}
]
const Nav = () => {

     return (
        <div>
            {
                LINKS.map((val) => (
                <ul key={val.to}>
                    <li><Link to={val.to}>{val.text}</Link></li>
                </ul>
                ))
            }
           
        </div>
     )
}

export default Nav