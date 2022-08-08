import React, { Component } from 'react';
import {Button, Popup, Table, TableBody, TableCell} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import axios from "axios";

class DriverLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts:[],
            sendData: {
                email:null,
                username:null,
                password:null,
                name:{
                    firstname:null,
                    lastname:null
                },
                address:{
                    city:null,
                    street:null,
                    number:null,
                    zipcode:null,
                    geolocation:{
                        lat:null,
                        long:null
                    }
                },
                phone:null
            }
        }

        this.getAllUsers = this.getAllUsers.bind(this)
        this.getAllUsers();
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    getAllUsers(){
        fetch("https://fakestoreapi.com/users").then(
            (response) => response.json()
        ).then((data)=> {
            console.log(data);
            this.setState({
                posts:data
            })
        })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        console.log(this.state);

        let res = await this.postUser(this.state.sendData);
        console.log(res);
    }

    postUser = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('https://fakestoreapi.com/users', data)
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

        const {email,username,password,phone} = this.state.sendData;
        const {firstname,lastname} = this.state.sendData.name;
        const {city,street,number,zipcode} = this.state.sendData.address;
        const {lat,long} = this.state.sendData.address.geolocation;

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

        return (
            <div className="ui">
                <div className="ui two column grid">
                    <div style={{marginTop: "40px", width:"30vw"}} className="column">

                        <form style={{width: "40vw", marginLeft: "5vw"}} className="ui form" onSubmit={this.submitHandler}>

                            <div className="equal width fields">
                                <div className="field">
                                    <input name="firstname" placeholder="first name" value={firstname} onChange={this.changeHandler}/>
                                </div>
                                <div className="field">
                                    <input name="lastname" placeholder="last name" value={lastname} onChange={this.changeHandler}/>
                                </div>
                            </div>
                            <div className="field">
                                <input name="username" placeholder="username" value={username} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <input name="email" placeholder="email" value={email} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <input name="password" type="password" placeholder="password" value={password} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <input name="city" placeholder="city" value={city} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <input name="street" placeholder="street" value={street} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <input name="number" placeholder="street number" value={number} onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <input name="zipcode" placeholder="zip code" value={zipcode} onChange={this.changeHandler}/>
                            </div>
                            <div className="equal width fields">
                                <div className="field">
                                    <input name="lat" placeholder="lat value" value={lat} onChange={this.changeHandler}/>
                                </div>
                                <div className="field">
                                    <input name="long" placeholder="long value" value={long} onChange={this.changeHandler}/>
                                </div>
                            </div>
                            <div className="field">
                                <input name="phone" placeholder="telephone no" value={phone} onChange={this.changeHandler}/>
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