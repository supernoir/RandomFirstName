'use strict'

import React from 'react';
import ReactDOM from 'react-dom';


const names = [
    "Franz", "Henry", "Jack", "Maurice"
    ]


class ShowSuggestedNames extends React.Component {
    constructor(props){
        super(props);
        this.props.names = names;
    }

    render() {
        this.props.names = (name) => {
            return <li key={name}>{name}</li>
        }
    }
}


class RandomName extends React.Component {
    render() {
        return <form className="firstname">
        <label htmlFor="firstname">First Name </label>
        <input id="firstname" type="text"></input>
        <input type="submit" value="Randomize"></input>
        <hr />
        <ShowSuggestedNames name="Henry Thoureaux" />
        </form>
    }
}

let randomFirstNameGenerator = () => {
    let x = Math.random(255);
    x = parseInt(x);
    console.log(x);
}

randomFirstNameGenerator();

ReactDOM.render(
<RandomName />,
document.getElementById('randomfirstname')
);