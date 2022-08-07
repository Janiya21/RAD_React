import React, { Component } from 'react';
import {Table, TableBody, Popup, Image} from 'semantic-ui-react';
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
                        <form style={{width: "40vw", marginLeft: "5vw"}} className="ui form" onSubmit={this.submitHandler}>
                            <div className="field">
                                <label>Title</label>
                                <input name="title" placeholder="title" onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <label>Price</label>
                                <input name="price" placeholder="price" onChange={this.changeHandler}/>
                            </div>
                            <div className="field">
                                <label>Category</label>
                                <select name="category" onChange={this.changeHandler} className="ui dropdown">
                                    <option value="any" onChange={this.changeHandler}>Any Type</option>
                                    <option value="general" onChange={this.changeHandler}>General</option>
                                </select>
                            </div>
                            <div className="field">
                                <label>Description</label>
                                <select name="description" onChange={this.changeHandler} className="ui dropdown">
                                    <option value="any" onChange={this.changeHandler}>Any Type</option>
                                    <option value="general" onChange={this.changeHandler}>General</option>
                                </select>
                            </div>

                        </form>
                    </div>
                    <div className={"column"}>
                        <div className="equal width fields">
                            <div className="field">
                                <b>Please Attach Photo Here :</b>
                                <Popup content='Add users to your feed'
                                       trigger={
                                           <input style={{margin: "10px 0 0 0px"}} id="file" name="myFile"
                                                  type="file"/>}
                                />

                            </div>

                            <div className="field" id="file">
                                <Image style={{height:"30vh", margin:"5vh 0 0 5vw"}} src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DriverLogin;