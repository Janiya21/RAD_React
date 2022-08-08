import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import history from '../history';

class LoginPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            logID:'',
            loginPassword: '',
            loginValidLocation:'#'
        }
    }

    navigateToNext = () => {
        localStorage.setItem('loginID', this.state.logID)
        history.push({pathname:'/dashboard'});
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    submitHandler = async (e) => {
        e.preventDefault();
        this.navigateToNext();
    }
 
    render() {
        const {logID, loginPassword} = this.state;
        return (
            <div class="ui">
                <div class="ui centered grid">
                    <div className="row">
                        <h2 style={{margin: "50px 0 50px 40px"}} className="ui header">
                            <img src="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_300x300.png"
                                 className="ui circular image"/>Log-In</h2>
                    </div>
                    <form style={{width: "30vw", marginLeft: "5vw"}} className="ui form">
                        <div className="field">
                            <label>Enter Username</label>
                            <div className="ui left icon input">
                                <input type="text" name="logID" value={logID} onChange={this.changeHandler} placeholder="username"/>
                                <i aria-hidden="true" className="user icon"/>
                            </div>
                        </div>
                        <div className="field">
                            <label>Enter Password</label>
                            <div className="ui left icon input">
                                <input type="password" name="loginPassword" value={loginPassword} onChange={this.changeHandler}/>
                                <i aria-hidden="true" className="lock icon"/>
                            </div>
                        </div>
                        <button style={{margin: "40px 0 30px 0vw"}} onClick={this.submitHandler} className="ui inverted primary button">
                            <Link to="/dashboard">
                                Log In
                            </Link>
                        </button>

                       <p>Don't have Account ? <a href="url">
                           <Link to={"/regUser"}>Click here</Link>
                       </a> </p>

                    </form>

                </div>
            </div>
        );
    }
}

export default LoginPage;