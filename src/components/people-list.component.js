import React, { Component } from 'react';

const Person = ({person, deletePerson}) => {
    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.birthdate.substring(0,10)}</td>
            <td>
                <button value="Edit" onClick={} >Edit</button>
            </td>
            <td>
                <button value="Delete" onClick={() => deletePerson(person._id)} >Delete</button>
            </td>
        </tr>
    );
};

export default class PeopleList extends Component {
    constructor(props){
        super(props);

        this.deletePerson = this.deletePerson.bind(this);

        this.state = {
            people: [{_id: 'a1b2', name: "Delila", birthdate: "1995-07-02T22:00:00.000Z"},
                    {_id: 'a2b3', name: "Neko", birthdate: "1995-08-02T22:00:00.000Z"},
                    {_id: 'a3b4', name: "Opet neko", birthdate: "2020-07-02T22:00:00.000Z"}]
        };
    };

    deletePerson(id){
        //Delete API

        //Delete in file

        this.setState({
            people: this.state.people.filter(el =>  el._id != id)
        });
    };

    render(){
        return (
            <div>
                <h1>People list</h1>
                <br/>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Birth date</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.people.map(current => {
                                return <Person person={current} key={current._id} deletePerson={this.deletePerson} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
};