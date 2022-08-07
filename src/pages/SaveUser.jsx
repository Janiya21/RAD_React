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
                            <div className="field">
                                <label>Driver ID</label>
                                <input name="driverId" placeholder="driverId" value={id}
                                       onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <label>Full Name</label>
                                <input name="name" placeholder="name" value={name} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input name="email" placeholder="email" value={email} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <label>Street</label>
                                <input name="street_no" placeholder="street_no" value={street_no} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <label>Zip Code</label>
                                <input name="zip_code" placeholder="zip_code" value={zipCode} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <label>TelNo</label>
                                <input name="telNo" placeholder="telephone" value={telNo}
                                       onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <input name="password" type="password" placeholder="enter a password" value={password}
                                       onChange={this.changeHandler}/>
                            </div>
                            <button className="ui primary button" style={{margin: "40px 0 0 15vw"}}
                                    type="submit">Save User
                            </button>
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