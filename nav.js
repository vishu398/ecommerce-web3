import React from'react'  
import { Link } from'react-router-dom'

const nav=()=>{
   return(
    <div>
        <ul>
            <li><link to="/">PRODUCTS</link></li>
            <li><link to="/add">ADD PRODUCT</link></li>
            <li><link to="/update">UPDATE PRODUCT</link></li>
            <li><link to="/logout">LOG-OUT</link></li>
            <li><link to="/profile">PROFILE</link></li>
            <li><link to="/signup">SIGN-UP</link></li>

        </ul>
    </div>
   )
}
export default nav;