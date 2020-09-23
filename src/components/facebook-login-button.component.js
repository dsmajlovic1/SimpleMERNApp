import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';


const FacebookLoginButton = () => {

    const componentClicked = (data) => {
        console.log("Data: ", data);
    }; 

    const responseFacebook = (response) => {
        console.log(response);
        
        axios.post('http://localhost:5000/api/save', response)
            .then(res => {
                console.log("Success!");
            })
            .catch(err => console.log("Error: "+ err));
        
        window.location = "/person";
    };

    return (
        <div >
            <FacebookLogin
                appId="634604950531240"
                scope="public_profile,email,user_birthday,user_gender,user_posts"
                fields="name,email,picture,birthday,gender,feed"
                isDisabled={false}
                onClick={componentClicked}
                callback={responseFacebook} 
            />
        </div>
        
    );
};

export default FacebookLoginButton;