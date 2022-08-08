import React, { Component } from 'react';
import { Table, TableBody, TableCell } from 'semantic-ui-react';
import {Link} from "react-router-dom";

class DriverLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            driverId: '',
            name: '',
            email:'',
            telNo:'',
            password:'',
            logID:'',
            loginPassword: '',
            loginValidLocation:'#'
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
                    <div style={{marginTop: "40px"}} className="column">
                        <form style={{width: "40vw", marginLeft: "5vw"}} className="ui form"
                              onSubmit={this.submitHandler}>
                            <div className="equal width fields">
                                <div className="field">
                                    <input name="firstName" placeholder="first name" value={password} onChange={this.changeHandler}/>
                                </div>
                                <div className="field">
                                    <input name="lastName" placeholder="last name" value={password} onChange={this.changeHandler}/>
                                </div>
                            </div>
                            <div className="field">
                                <input name="userName" placeholder="username" value={email} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <input name="password" type="password" placeholder="password" value={street_no} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <input name="city" placeholder="city" value={zipCode} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <input name="street" placeholder="street" value={telNo} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <input name="streetNo" placeholder="street number" value={password} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <input name="zipCode" placeholder="zip code" value={password} onChange={this.changeHandler}/>
                            </div>
                            <div className="equal width fields">
                                <div className="field">
                                    <input name="latValue" placeholder="lat value" value={password} onChange={this.changeHandler}/>
                                </div>
                                <div className="field">
                                    <input name="latValue" placeholder="lat value" value={password} onChange={this.changeHandler}/>
                                </div>
                            </div>
                            <div className="field">
                                <input name="tel" placeholder="telephone no" value={password} onChange={this.changeHandler}/>
                            </div>

                            <div className="equal width fields">
                                <div className="field">
                                    <button className="ui primary button" style={{marginLeft: "10vw"}} type="submit">
                                        Save User
                                    </button>
                                </div>
                                <div className="field">
                                    <button className="ui secondary button"  type="submit">
                                        clear
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={"column"}>
                        <Table celled style={{marginLeft:"-60px", width:"50vw"}}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>NIC</Table.HeaderCell>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>NIC/License</Table.HeaderCell>
                                    <Table.HeaderCell>Email</Table.HeaderCell>
                                    <Table.HeaderCell>TelNo</Table.HeaderCell>
                                    <Table.HeaderCell>Status</Table.HeaderCell>
                                    <Table.HeaderCell>Delete</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default DriverLogin;