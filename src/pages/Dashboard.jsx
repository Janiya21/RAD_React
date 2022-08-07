import React, { Component } from 'react';
import { Grid, Card, Button ,Icon } from 'semantic-ui-react';
import {Link} from "react-router-dom";

class LoginPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
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
            <div>
                <Grid style={{margin:"10vh 0 0 10vw"}}>
                    <Grid.Column width={5}>
                        <Card style={{height:"17vh"}}>
                            <Button>
                                <Link to={"/product"}>
                                    <Card.Content style={{margin:"2vh 0 0 0vw", height:"8vh"}} header='Products' />
                                </Link>
                            </Button>
                            <Card.Content extra>
                                <Icon name='user' />60 Products
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Card style={{height:"17vh"}}>
                            <Button>
                               <Link to={"/cart"}>
                                   <Card.Content style={{margin:"2vh 0 0 0vw", height:"8vh"}} header='Cart' />
                               </Link>
                            </Button>
                            <Card.Content extra>
                                <Icon name='user' />12 Carts
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Card style={{height:"17vh"}}>
                            <Button>
                                <Link to={""}>
                                    <Card.Content style={{margin:"2vh 0 0 0vw", height:"8vh"}} header='Users' />
                                </Link>
                            </Button>
                            <Card.Content extra>
                                <Icon name='user' />22 Users
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;