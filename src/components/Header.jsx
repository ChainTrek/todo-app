import React from 'react'

const Header = ({ title }) => {
  return (
    <header>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  )
}

export default Header
