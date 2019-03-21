import React, { Component } from 'react'

class AddContact extends Component {

  constructor(props){
    super(props)

    this.nameInput = React.createRef()
    this.emailInput = React.createRef()
    this.phoneInput = React.createRef()

  }
  
  onSubmit = e => {
      e.preventDefault()
      const contact = {
        name: this.nameInput.current.value,
        email: this.emailInput.current.value,
        phone: this.phoneInput.current.value
      }
      console.log(contact)
  }

  static defaultProps = {
      name: 'ABC',
      email: 'a@a.com',
      phone: '2121'
  }

  render() {
    const { name, email, phone } = this.props
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input defaultValue={name} ref={this.nameInput} type="text" name="name" className="form-control form-control-lg" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input defaultValue={email} ref={this.emailInput} type="email" name="email" className="form-control form-control-lg" placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input defaultValue={phone} ref={this.phoneInput} type="number" name="phone" className="form-control form-control-lg" placeholder="Enter Phone"/>
                </div>
                <button type="submit" className="btn btn-dark btn-block">Add</button>
            </form>
        </div>
      </div>
    )
  }
}


export default  AddContact