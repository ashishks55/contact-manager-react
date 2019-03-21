import React, { Component } from 'react'
import { Consumer } from '../../context.js'
import TextInputGroup from '../layout/TextInputGroup.js'
import axios from 'axios'

class EditContact extends Component {
  state = {
      name: '',
      email: '',
      phone: '',
      loading: true
  }

  async componentDidMount () {
      const { id } = this.props.match.params
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        this.setState({ name: response.data.name, email: response.data.email, phone: response.data.phone, loading: false})
      } catch (error) {
          console.log(error)
      }
  }

  onSubmit = async (dispatch, e) => {

      e.preventDefault()
      const { name, email, phone } = this.state
      const { id } = this.props.match.params
      const newContact = {
          name,
          email,
          phone
      }
      
      try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, newContact)
        dispatch({type: 'UPDATE_CONTACT', payload: response.data})
        this.setState({ name: '', email: '', phone: ''})
        this.props.history.push('/')
      } catch (error) {
          console.log(error)
      }  

  }

  onChange = e => this.setState({[e.target.name]: e.target.value})

  render() {
    const { name, email, phone, loading } = this.state

    return (
        <Consumer>
            {value => {
                const { dispatch } = value
                return  (
                    <div className="card mb-3">
                        <div className="card-header">Edit Contact</div>
                        {loading ? (
                            <p style={{ textAlign: 'center'}}>Loading...</p>
                        ) : (
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
                                <button type="submit" className="btn btn-dark btn-block">Update</button>
                            </form>
                        </div>
                        )}
                    </div>
                )
            }}
        </Consumer>
    )
  }
}


export default  EditContact