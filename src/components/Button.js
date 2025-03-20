import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';


export default function Button({ label, onClick, className, variant = 'primary', size = 'md', ...props }) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Button.defaultProps = {
  onClick: () => { },
  className: '',
};