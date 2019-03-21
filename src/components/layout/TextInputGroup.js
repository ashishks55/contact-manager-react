import React from 'react'
import PropTypes from 'prop-types';

function TextInputGroup(props) {
  
  const {value, onChange, type, name, label, placeholder} = props

  return (
    <div>
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input value={value} onChange={onChange} type={type} name={name} className="form-control form-control-lg" placeholder={placeholder} required/>
        </div>
    </div>
  )
}

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

TextInputGroup.defaultType = {
    type: 'text'
}

export default TextInputGroup
