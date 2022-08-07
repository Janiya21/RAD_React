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
                <Menu inverted pointing vertical>
                    <Dropdown item text='Registrations'>
                        <Dropdown.Menu >
                            <Dropdown.Item style={{height:"7vh"}}>
                                <a class="item">
                                  <Link style={{color:"black"}} to="/customer"><h5>Customer</h5></Link>
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a class="item">
                                  <Link style={{color:"black"}} to="/driver"><h5>Driver</h5></Link>
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a class="item">
                                    <Link style={{color:"black"}} to="/admin"><h5>Admin</h5></Link>
                                </a>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>
            </div>
        </div>
        );
}

export default Navbar;