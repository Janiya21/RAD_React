import React, { Component } from 'react';
import {Button, Popup, Table, TableBody, TableCell} from 'semantic-ui-react';
import {Link} from "react-router-dom";

class DriverLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts:[],
            driverId: '',
            name: '',
            email:'',
            telNo:'',
            password:'',
            logID:'',
            loginPassword: '',
            loginValidLocation:'#'
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    submitHandler = async (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    callAPI(){
        fetch("https://fakestoreapi.com/users").then(
            (response) => response.json()
        ).then((data)=> {
            console.log(data);
            this.setState({
                posts:data
            })
        })
    }
 
    render() {
        let tb_data = this.state.posts.map((item)=>{
            return (
                <Table.Row>
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell>{item.name.firstname} {item.name.lastname}</Table.Cell>
                    <Table.Cell>{item.username}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.address.zipcode}</Table.Cell>
                    <Table.Cell>{item.address.number} {item.address.street} {item.address.city}</Table.Cell>
                    <Table.Cell>{item.phone}</Table.Cell>

                </Table.Row>
            )
        });

        const {id,name,email,telNo,password,street_no, zipCode} = this.state;
        return (
            <div className="ui">
                <div className="ui two column grid">
                    <div style={{marginTop: "40px", width:"30vw"}} className="column">
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
                                    <button className="ui primary button" style={{marginLeft: "6vw"}} type="submit">
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
                    <div className={"column"} >
                        <Table celled style={{marginLeft:"100px", width:"60vw"}}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>ID</Table.HeaderCell>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Username</Table.HeaderCell>
                                    <Table.HeaderCell>Email</Table.HeaderCell>
                                    <Table.HeaderCell>Zipcode</Table.HeaderCell>
                                    <Table.HeaderCell>Address</Table.HeaderCell>
                                    <Table.HeaderCell>Telephone</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {tb_data}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default DriverLogin;