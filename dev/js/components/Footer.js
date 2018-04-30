import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    {", "}
    <FilterLink filter="SHOW_NORMAL">Normal</FilterLink>
    {", "}
    <FilterLink filter="SHOW_HIGH">High</FilterLink>
    {", "}
    <FilterLink filter="SHOW_URGENT">Urgent</FilterLink>
  </p>
)

export default Footer
