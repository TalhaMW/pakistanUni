import React from "react";
import "./Search.css";

export const Search = ({placeholder,inputChange})=>{
    return(
        <input type="search" 
        placeholder={placeholder}
        onChange={inputChange}
         />
    )
}