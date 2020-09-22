import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class AddPerson extends Component {
    constructor(props){
        super(props);

        this.onNameChange = this.onNameChange.bind(this);
        this.onBirthdateChange = this.onBirthdateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            type: "add",
            name: '',
            birthdate: new Date()
        };
    };

    onNameChange(e){
        this.setState({
            name: e.target.value
        });
    };

    onBirthdateChange(date){
        this.setState({
            birthdate: date
        });
    };

    onSubmit(){
        //Save API

        //Save local
    };

    render(){
        return (
            <div>
                <div>
                { this.props.match.params.type === "edit" ? <h1>Edit person</h1> : <h1>Add person</h1> }
                </div>
                <br/>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group" >
                        <label>Name: </label>
                        <input type="text" 
                            value={this.state.name} 
                            onChange={this.onNameChange} 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Birth date: </label>
                        <DatePicker 
                            selected={this.state.birthdate} 
                            onChange={this.onBirthdateChange} 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    };
}