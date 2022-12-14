import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Dropdown, Menu } from 'semantic-ui-react'

function Navbar() {
        return (
             <div class="ui inverted segment"  style={{marginTop:"0px"}}>
                       
            <div class="ui inverted secondary menu">
                <a class="active item">
                    <Link to="/">Home</Link>
                </a>
                <a className="active item">
                    <Link to="/product">Product</Link>
                </a>
                <a className="active item">
                    <Link to="/cart">Cart</Link>
                </a>
            </div>
        </div>
        );
}

export default Navbar;