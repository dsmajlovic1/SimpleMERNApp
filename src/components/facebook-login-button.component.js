import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

import axios from 'axios';

export default class FacebookLoginButton extends Component {
    constructor(props){
        super(props);

        this.state = {
            key: process.env.API_KEY
        }
    };

    responseFacebook(response){
        console.log(response);
        
        axios.post('http://localhost:5000/api/save', response)
            .then(res => {
                console.log("Success!");
            })
            .catch(err => console.log("Error: "+ err));
        
        window.location = "/person";
    };

    onLoginFailed(){
        console.log("Login failed.");
    };

    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <FacebookLogin
                    appId={process.env.REACT_APP_ID}
                    scope="public_profile,email,user_birthday,user_gender,user_posts"
                    fields="name,email,picture,birthday,gender,feed"
                    
                    isDisabled={false}
                    callback={this.responseFacebook}
                    onFailure={this.onLoginFailed} 
                />
            </div>
            
        );
    };
}