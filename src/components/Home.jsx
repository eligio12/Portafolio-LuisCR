import React from 'react'

const Home = () => {
  return (
    <div className='Home' id="Home">
      <div className="Home__title">
        <h2 className="Home__name">Luis Eligio Cortes Rodarte</h2>
        <div className="Home__description">
          <p >Desarrollador de Software Full Stack</p>
        </div>
      </div>
      <div className="Home__img">
        <img src="./Me.jpeg" alt="" />
      </div>
      <div className='Home__btns'>
        <button className='home__btn--cv'>
          <span><a href="/CV Luis CR.pdf" download={' '}>Descargar CV</a></span>
        </button>
        <a href="#aboutMe"><button className='Home__btn-ab'>Acerca de Mí</button></a>
      </div>

    </div>
  )
}

export default Home
