import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextField = ({ field, value, label, error, type, onChange }) => {
    
    return (
      <div className={classnames('field', { 'error': error })}>
        <label>{label}</label>
        <input 
            type={type}
            value={value}
            onChange={onChange}
            name={field}
            placeholder={label}
        />
        {error && <span style={{color: "#9f3a38"}}>{error}</span>}
      </div>  
    );
}

TextField.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired    
}

TextField.defaultProps = {
    type: 'text'
}

export default TextField;