import React, { Component } from 'react';
import { Grid, Card, Button ,Icon } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import axios from "axios";

class LoginPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products:'',
            carts:'',
            users:''
        }

        this.countProducts = this.countProducts.bind(this)
        this.countProducts();

        this.countCarts = this.countCarts.bind(this)
        this.countCarts();

        this.countUsers = this.countUsers.bind(this)
        this.countUsers();
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    countProducts(){
        fetch("https://fakestoreapi.com/products").then(
            (response) => response.json()
        ).then((data)=> {
            console.log(data);

            let count=0;
            for (let d of data) {
                count++;
            }
            this.setState({
               products:count
            })
        })
    }

    countCarts(){
        fetch("https://fakestoreapi.com/carts").then(
            (response) => response.json()
        ).then((data)=> {
            console.log(data);

            let count=0;
            for (let d of data) {
                count++;
            }
            this.setState({
                carts:count
            })
        })
    }

    countUsers(){
        fetch("https://fakestoreapi.com/users").then(
            (response) => response.json()
        ).then((data)=> {
            console.log(data);

            let count=0;
            for (let d of data) {
                count++;
            }
            this.setState({
                users:count
            })
        })
    }
 
    render() {
        const user = localStorage.getItem('loginID');
        const {users,carts,products} = this.state;
        return (
            <div>
                <h3 className="ui block header">Hello {user} !!</h3>
                <Grid style={{margin:"10vh 0 0 10vw"}}>
                    <Grid.Column width={5}>
                        <Card style={{height:"17vh"}}>
                            <Button>
                                <Link to={"/product"}>
                                    <Card.Content style={{margin:"2vh 0 0 0vw", height:"8vh"}} header='Products' />
                                </Link>
                            </Button>
                            <Card.Content extra>
                                <Icon name='user' />{products} Products
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
                                <Icon name='user' />{carts} Carts
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Card style={{height:"17vh"}}>
                            <Button>
                                <Link to={"/regUser"}>
                                    <Card.Content style={{margin:"2vh 0 0 0vw", height:"8vh"}} header='Users' />
                                </Link>
                            </Button>
                            <Card.Content extra>
                                <Icon name='user' />{users} Users
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;