import React, { Component } from 'react';
import { Grid, Card, CardContent,Icon } from 'semantic-ui-react';
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
                <Grid>
                    <Grid.Column width={5}>
                        <Card>
                            <Card.Content header='About Amy' />
                            <Card.Content description="as" />
                            <Card.Content extra>
                                <Icon name='user' />4 Friends
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Card>
                            <Card.Content header='About Amy' />
                            <Card.Content description="cs" />
                            <Card.Content extra>
                                <Icon name='user' />4 Friends
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Card>
                            <Card.Content header='About Amy' />
                            <Card.Content description="lk" />
                            <Card.Content extra>
                                <Icon name='user' />4 Friends
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;