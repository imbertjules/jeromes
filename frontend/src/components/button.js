import React, { Component } from 'react';
import './customers.css';

class Button extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        };
    }

    handleDelete = itemId => {
            return(res => res.json()
            .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)))
            .fetch('/api/customers/:id'));
    };

    render() {
        return (
            <div>
                <button
                    onClick={this.handleDelete}
                >hello les gens</button>
            </div>
        );
    }
}



export default Button;
