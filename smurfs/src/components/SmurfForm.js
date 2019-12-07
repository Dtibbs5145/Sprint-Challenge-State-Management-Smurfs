import React, { useState } from 'react';
import { AddSmurf, FetchSmurf } from '../actions/index';
import { connect } from 'react-redux';

const SmurfForm = props => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');

    const handleName = e => {
        setName(e.target.value);
    };
    const handleAge = e => {
        setAge(e.target.value);
    };
    const handleHeight = e => {
        setHeight(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.AddSmurf(name, height, age);
        setName('');
        setAge('');
        setHeight('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <input>
                type='text'
                label="name"
                placeholder="Name"
                value={name}
                onChange={handleName}
            </input>
            <input>
                type='text'
                label="age"
                placeholder="Age"
                value={age}
                onChange={handleAge}
            </input>
            <input>
                type='text'
                label="height"
                placeholder="Height"
                value={height}
                onChange={handleHeight}
            </input>
            <button>Submit Smurf</button>
        </Form>
    );
};

export default connect(null, { AddSmurf, FetchSmurf })(SmurfForm);