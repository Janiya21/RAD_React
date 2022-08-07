import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
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
        const {logID, loginPassword} = this.state;
        return (
            <div class="ui">
                <div class="ui centered grid">
                    <div className="row">
                        <h2 style={{margin: "50px 0 50px 0px"}} className="ui header">
                            <img
                                src="https://img.freepik.com/premium-vector/man-with-steering-wheel-driver-avatar-chauffeur-character_176411-3059.jpg?w=2000"
                                className="ui circular image"/>Log-In</h2>
                    </div>
                    <form style={{width: "30vw", marginLeft: "5vw"}} className="ui form">
                        <div className="field">
                            <label>Enter Username</label>
                            <div className="ui left icon input">
                                <input type="text" name="logID" value={logID} onChange={this.changeHandler}
                                       placeholder="username"/>
                                <i aria-hidden="true" className="user icon"/>
                            </div>
                        </div>
                        <div className="field">
                            <label>Enter Password</label>
                            <div className="ui left icon input">
                                <input type="password" name="loginPassword" value={loginPassword}
                                       onChange={this.changeHandler}/>
                                <i aria-hidden="true" className="lock icon"/>
                            </div>
                        </div>
                        <button style={{margin: "40px 0 30px 0vw"}} className="ui inverted primary button">
                            <Link to={this.state.loginValidLocation}>
                                Log In
                            </Link>
                        </button>

                       <p>Don't have Account ? <a href="url">
                           <Link to={""}></Link>
                       </a> </p>

                    </form>

                </div>
            </div>
        );
    }
}

export default DriverLogin;