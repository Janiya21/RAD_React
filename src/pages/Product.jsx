import React, { Component } from 'react';
import {Dropdown} from "semantic-ui-react";
import axios from "axios";

class DriverLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title:'',
            price:'',
            category:[],
            description:[],
            image:''
        }
        this.getAllCategories = this.getAllCategories.bind(this)
        this.getAllCategories();

        this.getAllDesc = this.getAllDesc.bind(this)
        this.getAllDesc();
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    getAllCategories(){
        fetch("https://fakestoreapi.com/products/categories").then(
            (response) => response.json()
        ).then((data)=> {
            console.log(data);
            this.setState({
                category:data
            })
        })
    }

    getAllDesc(){
        fetch("https://fakestoreapi.com/products/categories").then(
            (response) => response.json()
        ).then((data)=> {
            console.log(data);
            this.setState({
                description:data
            })
        })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        console.log(this.state);

        let res = await this.postProduct(this.state);
        console.log(res);
    }

    postProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('https://fakestoreapi.com/products', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
 
    render() {
        const {title,price,category,description} = this.state;
        return (
            <div className="ui">
                <div className="ui two column grid">
                    <div style={{marginTop: "40px",width: "90vw"}} className="column">
                        <form style={{width: "90vw", marginLeft: "5vw"}} className="ui form" onSubmit={this.submitHandler}>
                           <div class={"equal with fields"}>
                               <div className="field">
                                   <div className="field">
                                       <label>Title</label>
                                       <input name="title" placeholder="title" value={title} onChange={this.changeHandler}/>
                                   </div>
                                   <div className="field">
                                       <label>Price</label>
                                       <input name="price" placeholder="price" value={price} onChange={this.changeHandler}/>
                                   </div>
                                   <div className="field">
                                       <label>Category</label>
                                       <Dropdown inline options={category} selection />
                                   </div>
                                   <div className="field">
                                       <label>Description</label>
                                       <Dropdown inline options={description} selection />
                                   </div>

                                   <div className="equal width fields">
                                       <div className="field">
                                           <button className="ui secondary button"  style={{margin: "10vh 0 0 10vw", width:"8vw"}} type="submit">
                                               Clear Fields
                                           </button>
                                       </div>
                                       <div className="field">
                                           <button className="ui primary button" style={{margin: "10vh 0 0 5vw"}} type="submit">
                                               Save Product
                                           </button>
                                       </div>
                                   </div>
                               </div>
                               <div className="field" style={{marginLeft:"8vw"}}>
                                   <div className="equal width fields">
                                       <div className="field">
                                           <b>Please Attach Photo Here :</b>
                                           <input type="file" onChange={this.onImageChange} className="filetype" id="group_image"/>
                                       </div>

                                       <div className="field" id="file">
                                           <img id="target" style={{width:"20vw"}} src={this.state.image}/>
                                       </div>
                                   </div>
                               </div>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default DriverLogin;