import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => { // where are all the args passed?
    if (active) {
        return <span>{children}</span> // what are children?
    }

  return (
    <a href="#"
        onClick={e => {
         e.preventDefault()
         onClick()
        }}
    >
        {children}
    </a>
  )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired, //  PropTypes defines type and which props are required.
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link