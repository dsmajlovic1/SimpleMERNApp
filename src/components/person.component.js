import React, { Component } from 'react';
import axios from 'axios';
import { findByAltText } from '@testing-library/react';

const Post = ({post, deletePost}) => {
    return (
        <tr>
            <td style={{width: '10%'}}>{post.created_time.substring(0,10)}</td>
            <td style={{width: '60%'}}>{post.message}</td>
            <td style={{width: '20%'}}>
                <a href={"https://www.facebook.com/"+post.id}>Visit post on facebook</a>
            </td>
            <td style={{width: '10%'}}>
                <button value="Delete" onClick={() => deletePost(post.id)} >Delete</button>
            </td>
        </tr>
    );
};

export default class Person extends Component {
    constructor(props){
        super(props);

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onBirthdayChange = this.onBirthdayChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.postList = this.postList.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person: {
                name: '',
                email: '',
                birthday: '',
                gender: '',
                feed: {
                    data: []
                }
            }
        };
    };

    componentDidMount(){
        axios.get('http://localhost:5000/api/get')
            .then(response => {
                this.setState({
                    person: response.data
                })
            })
            .catch(err => { console.log("Error: "+err)});
    };


    onNameChange(e){
        let newValue = this.state.person;
        newValue.name = e.target.value;
        this.setState({
            
            person: newValue
        });
    };

    onEmailChange(e){
        let newValue = this.state.person;
        newValue.email = e.target.value;
        this.setState({
            
            person: newValue
        });
    };

    onBirthdayChange(e){
        let newValue = this.state.person;
        newValue.birthday = e.target.value;
        this.setState({
            
            person: newValue
        });
    };

    onGenderChange(e){
        let newValue = this.state.person;
        newValue.gender = e.target.value;
        this.setState({
            
            person: newValue
        });
    };

    onSubmit(){
        //Save local

        axios.post('http://localhost:5000/api/save', this.state.person)
            .then( response => {
                console.log("Success!");
            })
            .catch( err => console.log("Error: "+err));
        
            window.location = "/person";
    };

    deletePost(id){
        let newPerson = this.state.person;

        newPerson.feed.data = this.state.person.feed.data.filter( el => el.id !== id);

        this.state.setState({
            person: newPerson
        });
    };

    postList(){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Message</th>
                        <th>Link</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.person.feed.data.map( el => {
                            return <Post post={el} deletePost={this.deletePost} key={el.id} />})
                    }
                </tbody>
            </table>
        );

    };

    render(){
        return (
            <div>
                <div>
                <h1>Edit person</h1>
                </div>
                <br/>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group" >
                        <input type="submit" value="Save" className="btn btn-primary" style={{ float: 'right'}}/>
                    </div>
                    <br/>
                    <div className="form-group" >
                        <label>Name: </label>
                        <input type="text" 
                            value={this.state.person.name} 
                            onChange={this.onNameChange} 
                            className="form-control"/>
                    </div>
                    <div className="form-group" >
                        <label>Email: </label>
                        <input type="text" 
                            value={this.state.person.email} 
                            onChange={this.onEmailChange} 
                            className="form-control"/>
                    </div>
                    <div className="form-group" >
                        <label>Birthday: </label>
                        <input type="text" 
                            value={this.state.person.birthday} 
                            onChange={this.onBirthdayChange} 
                            className="form-control"/>
                    </div>
                    <div className="form-group" >
                        <label>Gender: </label>
                        <input type="text" 
                            value={this.state.person.gender} 
                            onChange={this.onGenderChange} 
                            className="form-control"/>
                    </div>
                    <div>
                    {this.postList()}
                    </div>
                </form>
            </div>
        );
    };
};