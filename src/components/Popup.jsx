import React from 'react'

const Popup = () => {
  return (
    <div className="Popup">
      <ul className="Popup--list">
        <li className='Popup--item'><a href="https://www.linkedin.com/in/luis-eligio-cortes-rodarte-713900295/" target="_blank" className="socialNetworks"><i className='bx bxl-linkedin-square linkedin--icon' ></i></a></li>
        <li className='Popup--item'><a href="https://github.com/eligio12" target="_blank" className="socialNetworks"><i className='bx bxl-github github--icon'></i></a></li>
        <li className='Popup--item'><a href="mailto:luis.cortes7593@alumnos.udg.mx" target="_blank" className="socialNetworks"><i className='bx bxl-gmail gmail--icon' ></i></a></li>
      </ul>
    </div>
  )
}

export default Popup
