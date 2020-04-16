import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  deleteid = event =>
  {
    console.log(event.target.id)
    let custo= this.state.customers;
    
    fetch('/api/customers/' + this.state.customers[event.target.id].id, {
    method : "DELETE",
    })
    
    .then(this.setState(custo.splice(event.target.id, 1)))
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({id: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>

        <form onSubmit={this.handleSubmit}>
        <label>
          firstName :
          <input type="text" value={this.state.customers.firstName} />
        </label>
        <label>
          lastName :
          <input type="text" value={this.state.customers.lastName} />
        </label>
        <label>
          id :
          <input type="text" value={this.state.customers.id} />
        </label>
        <input type="submit" value="Envoyer" onClick={this.handleChange} />
      </form>

        <ul>
        {this.state.customers.map((customer,i) =>
          <li key={customer.id} id={customer.id}>{customer.firstName} {customer.lastName}{
            <button
               id={i}
               onClick={this.deleteid}
              >hello les gens</button>
          }</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
