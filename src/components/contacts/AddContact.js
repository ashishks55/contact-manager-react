import React, { Component } from 'react'
import { Consumer } from '../../context.js'
import TextInputGroup from '../layout/TextInputGroup.js'
import axios from 'axios'

class AddContact extends Component {
  state = {
      name: '',
      email: '',
      phone: ''
  }

  onSubmit = async (dispatch, e) => {
      e.preventDefault()
      const { name, email, phone } = this.state
      
      const newContact = {
          name,
          email,
          phone
      }
      
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        dispatch({type: 'ADD_CONTACT', payload: response.data})
        this.setState({ name: '', email: '', phone: ''})
        this.props.history.push('/')
      } catch (error) {
          console.log(error)
      }  

  }

  onChange = e => this.setState({[e.target.name]: e.target.value})

  render() {
    const { name, email, phone } = this.state

    return (
        <Consumer>
            {value => {
                const { dispatch } = value
                return  (
                    <div className="card mb-3">
                        <div className="card-header">Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <TextInputGroup 
                                    label="Name"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={this.onChange}
                                />
                                <TextInputGroup 
                                    label="Email"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={this.onChange}
                                    type="email"
                                />
                                <TextInputGroup 
                                    label="Phone"
                                    name="phone"
                                    placeholder="Enter Number"
                                    value={phone}
                                    onChange={this.onChange}
                                />
                                <button type="submit" className="btn btn-dark btn-block">Add</button>
                            </form>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
  }
}


export default  AddContact