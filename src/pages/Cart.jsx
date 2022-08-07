import React, { Component } from 'react';
import {Table, TableBody, Popup, Image, Card, Button} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import {TextField} from "@mui/material";

class DriverLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            driverId: '',
            name: '',
            email:'',
            telNo:'',
            password:'',
            logID:''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    submitHandler = async (e) => {
        e.preventDefault();
        console.log(this.state);
    }
 
    render() {
        const {id,name,email,telNo,password,street_no, zipCode} = this.state;
        return (
            <div className="ui">
                <div className="ui two column grid">
                    <div style={{margin: "40px 0 0 23vw"}} className="column">
                        <form style={{width: "40vw", marginLeft: "5vw"}} className="ui form" onSubmit={this.submitHandler}>
                            <div className="field">
                                <label>Username</label>
                                <select name="vehicle_type" onChange={this.changeHandler} className="ui dropdown">
                                    <option value="any" onChange={this.changeHandler}>Any Type</option>
                                    <option value="general" onChange={this.changeHandler}>General</option>
                                </select>
                            </div>
                            <div className="field">
                                <label>Product Title</label>
                                <select name="vehicle_type" onChange={this.changeHandler} className="ui dropdown">
                                    <option value="any" onChange={this.changeHandler}>Any Type</option>
                                    <option value="general" onChange={this.changeHandler}>General</option>
                                </select>
                            </div>
                            <div className="field">
                                <label>Quantity</label>
                                <input name="quantity" placeholder="quantity" onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <label>Return-date</label>
                                <TextField  style={{width:"40vw"}} name="return_date"  onChange={this.changeHandler}
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