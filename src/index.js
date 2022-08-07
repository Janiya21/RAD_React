import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout1 from "./pages/Layout";
import Login from './pages/DriverLogin';

export default function App(props) {
    console.log(props);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout1 />}>
                    <Route index element={<Login />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
