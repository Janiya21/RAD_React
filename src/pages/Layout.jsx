import React from "react";
import {Outlet} from "react-router-dom";
import Navbar2 from "./navbar2";

const Layout = () => {
    return (
        <>
            <Navbar2/>
            <Outlet/>
        </>
    );
};

export default Layout;