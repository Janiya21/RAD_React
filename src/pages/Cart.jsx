import React, { Component } from 'react';
import {Table, TableBody, Popup, Image, Card, Button, Dropdown} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import {TextField} from "@mui/material";
import axios from "axios";

class DriverLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username:'',
            title:'',
            quantity:'',
            returnDate:''
        }

        this.getAllUsernames = this.getAllUsernames.bind(this)
        this.getAllUsernames();

        this.getAllTitles = this.getAllTitles.bind(this)
        this.getAllTitles();
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    getAllUsernames(){
        fetch("https://fakestoreapi.com/products/categories").then(
            (response) => response.json()
        ).then((data)=> {
            console.log(data);
            this.setState({
                username:data
            })
        })
    }

    getAllTitles(){
        fetch("https://fakestoreapi.com/products/categories").then(
            (response) => response.json()
        ).then((data)=> {
            console.log(data);
            this.setState({
                title:data
            })
        })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        console.log(this.state);

        let res = await this.postCart(this.state);
        console.log(res);
    }

    postCart = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('https://fakestoreapi.com/carts', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }
 
    render() {
        const {username,title,quantity,returnDate} = this.state;
        return (
            <div className="ui">
                <div className="ui two column grid">
                    <div style={{margin: "40px 0 0 23vw"}} className="column">
                        <form style={{width: "40vw", marginLeft: "5vw"}} className="ui form" onSubmit={this.submitHandler}>
                            <div className="field">
                                <label>Username</label>
                                <Dropdown inline options={username} selection />
                            </div>
                            <div className="field">
                                <label>Product Title</label>
                                <Dropdown inline options={title} selection />
                            </div>
                            <div className="field">
                                <label>Quantity</label>
                                <input name="quantity" value={quantity} placeholder="quantity" onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <label>Return-date</label>
                                <TextField  style={{width:"40vw"}} name="returnDate"  value={returnDate} onChange={this.changeHandler}
                                           id="date"
                                           type="date"
                                           defaultValue="2022-05-24"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                />
                            </div>
                            <button className="ui secondary button" style={{margin: "20px 0 30px 13vw", width:"10vw"}}
                                    type="submit">Save
                            </button>
                            <button className="ui primary button" style={{margin: "20px 0 30px 13vw", width:"10vw"}}
                                    type="submit">Clear
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default DriverLogin;