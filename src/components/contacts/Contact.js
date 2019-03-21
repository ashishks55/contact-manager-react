import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { Consumer } from '../../context.js'
import classnames from 'classnames'
import axios from 'axios'

class Contact extends Component {
  
  state = {
      showContactInfo: false
  }

  onShowClick = (e) => {
    this.setState({showContactInfo: !this.state.showContactInfo})
  }

  onDeleteClick = async (id, dispatch) => {
    
    try{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({type: 'DELETE_CONTACT', payload: id})
    } catch (error) {
        console.log(error)
    }

  }

  render() {
    const { id, name, email, phone } = this.props.contact
    const { showContactInfo } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card card-body mb-3">
              <h4>
                  {name} 
                  &nbsp;
                  <i onClick={this.onShowClick} className={classnames('fas', { 'fa-sort-down' : showContactInfo, 'fa-sort-up' : !showContactInfo})}/>
                  {/* <i onClick={this.onShowClick} className={"fas "+(showContactInfo ? "fa-sort-down" : "fa-sort-up")}/> */}
                  <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fas fa-times" style={{float: 'right', cursor: 'pointer'}}/>
                  <Link to={`edit/${id}`}><i className="fas fa-pencil-alt" style={{float: 'right', marginRight: '1rem'}}/></Link>
              </h4>
              {showContactInfo ? 
                  (<ul className="list-group">
                      <li className="list-group-item">Email: {email}</li>
                      <li className="list-group-item">Phone: {phone}</li>
                  </ul>) 
                  : null
              }   
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;