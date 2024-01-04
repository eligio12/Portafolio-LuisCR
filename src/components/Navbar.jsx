import { useState } from "react"

const Navbar = ({ setDarkMode, darkMode }) => {

  const [showNaBar, setShowNaBar] = useState(false)

  const handleShowNav = () => {
    setShowNaBar(!showNaBar)
  }
  const handleCloseNav = () => {
    setShowNaBar(false)
  }

  const handleDark = () => {
    setDarkMode(!darkMode)
  }
  return (
    <nav className='navbar'>
      <h2 className="navbar__name"><i className='bx bx-code-alt'></i><a href="#Home">
      <svg className="name__k" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="150px" height="150px" viewBox="0 0 150 150" enableBackground="new 0 0 150 150" xmlSpace="preserve">
<g>
	<path fill="#BB1818" d="M28.803,54.047v33.505h20.034v7.599H19.765V54.047H28.803z"/>
	<path fill="#BB1818" d="M80.268,65.014c-0.537-0.864-1.209-1.621-2.014-2.274c-0.807-0.652-1.719-1.161-2.735-1.525
		c-1.017-0.365-2.083-0.547-3.195-0.547c-2.035,0-3.762,0.394-5.181,1.18c-1.42,0.787-2.572,1.842-3.454,3.167
		c-0.883,1.324-1.525,2.831-1.929,4.519c-0.403,1.689-0.604,3.435-0.604,5.239c0,1.727,0.202,3.406,0.604,5.037
		c0.403,1.632,1.045,3.1,1.929,4.404c0.882,1.305,2.034,2.351,3.454,3.137c1.419,0.787,3.146,1.181,5.181,1.181
		c2.763,0,4.922-0.844,6.477-2.533c1.555-1.688,2.504-3.915,2.85-6.678h8.75c-0.23,2.571-0.826,4.894-1.785,6.966
		s-2.227,3.838-3.799,5.296c-1.574,1.459-3.416,2.572-5.527,3.339c-2.111,0.768-4.432,1.151-6.965,1.151
		c-3.147,0-5.978-0.547-8.491-1.641c-2.514-1.094-4.634-2.6-6.361-4.519s-3.051-4.174-3.972-6.765
		c-0.921-2.591-1.382-5.383-1.382-8.376c0-3.07,0.46-5.92,1.382-8.549c0.921-2.628,2.245-4.922,3.972-6.879
		c1.727-1.958,3.847-3.492,6.361-4.605c2.513-1.113,5.344-1.669,8.491-1.669c2.264,0,4.404,0.327,6.418,0.979
		c2.016,0.653,3.818,1.603,5.412,2.85c1.592,1.248,2.906,2.792,3.943,4.634s1.688,3.953,1.957,6.333h-8.75
		C81.15,66.827,80.805,65.877,80.268,65.014z"/>
	<path fill="#BB1818" d="M118.724,54.047c1.842,0,3.502,0.298,4.979,0.893c1.478,0.595,2.744,1.41,3.8,2.446
		c1.055,1.036,1.861,2.236,2.418,3.598c0.556,1.363,0.835,2.831,0.835,4.404c0,2.418-0.51,4.51-1.526,6.275
		c-1.017,1.766-2.677,3.109-4.979,4.03v0.115c1.113,0.308,2.034,0.777,2.764,1.41c0.729,0.634,1.324,1.382,1.784,2.245
		c0.461,0.863,0.796,1.813,1.008,2.85c0.21,1.036,0.354,2.072,0.432,3.109c0.038,0.652,0.076,1.42,0.115,2.303
		c0.038,0.883,0.105,1.784,0.201,2.705s0.249,1.795,0.461,2.619c0.21,0.826,0.527,1.526,0.949,2.102h-9.038
		c-0.499-1.305-0.806-2.858-0.921-4.663c-0.115-1.804-0.288-3.53-0.518-5.181c-0.308-2.149-0.96-3.723-1.958-4.721
		s-2.629-1.497-4.893-1.497h-9.038V95.15h-9.038V54.047H118.724z M115.5,72.641c2.072,0,3.627-0.46,4.663-1.381
		s1.554-2.418,1.554-4.49c0-1.995-0.518-3.444-1.554-4.347c-1.036-0.901-2.591-1.353-4.663-1.353h-9.901v11.571H115.5z"/>
</g>
</svg>
        </a></h2>
      <div className={`${showNaBar ? 'show__navbar' : "nav__menu"}`}>
      <span onClick={handleCloseNav} className="navbar__close">
          <i className="bx bx-x"></i>
        </span>
        <ul className="navbar__list">
          {/* <li className="navbar__item"><a href="#Home">Kevin</a></li> */}
          <li className="navbar__item"><a href="#aboutMe">Acerca de Mi</a></li>
          <li className="navbar__item"><a href="#skills">Habilidades</a></li>
          <li className="navbar__item"><a href="#projects">Proyectos</a></li>
          <li className="navbar__item"><a  href="#contact">Contacto</a></li>
          <li className="navbar__item">
            <label className="ui-switch">
              <input onChange={handleDark} type="checkbox" checked={darkMode}/>
              <div className="slider">
                <div className="circle"></div>
              </div>
            </label>
          </li>
        </ul>  
      </div>
      <span onClick={handleShowNav} className="navbar__btn">
        <i className='bx bx-menu'></i>
      </span>
    </nav>
  )
  
}

      

export default Navbar
