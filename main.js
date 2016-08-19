'use strict'

const names = [
    "Franz", "Henry", "Jack", "Maurice"
    ]

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


import React from 'react';
import ReactDOM from 'react-dom';

class RandomName extends React.Component{
    render() {
        return <form className="firstname">
        <label htmlFor="firstname">First Name </label>
        <input id="firstname" type="text"></input>
        <input type="submit" value="Randomize"></input>
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