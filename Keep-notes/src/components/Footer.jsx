import React from 'react'
import './styles.css'
const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <footer>
        <p>&copy; Copyright {year}</p>
    </footer>
  )
}

export default Footer