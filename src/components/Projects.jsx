import { useEffect, useState } from "react"

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const sliders = [
    {
      title: 'User Crud',
      image: '/userCrud.PNG',
      site:'https://crud-gen29.netlify.app',
      paragraph: 'Pagina en la cual se puede crear usuarios, borrar y actualizar, todo esto desde una api publica proporcionada por Academlo',
      tecnologys: 'HTML, CSS, API, React JS',
      github: 'https://github.com/eligio12/ent4-gen29'
    },
    {
      title: 'Pokedex',
      image: '/pokedex.PNG',
      site:'https://pokedex-gen29.netlify.app',
      paragraph: 'Pagina que contiene información de la serie animada Pokémon, todo extraído de un API publica',
      tecnologys: 'HTML, CSS, API, React JS',
      github: 'https://github.com/eligio12/ent5-gen29.git'
    },
    {
      title: 'Rick and Morty',
      image: '/RickandMorty.PNG',
      site:'https://rickandmorty-gen29.netlify.app',
      paragraph: 'Pagina que contiene información de la serie animada Rick and Morty, todo extraído de un API publica.',
      tecnologys: 'HTML, CSS, API, React JS',
      github: 'https://github.com/eligio12/ent3-gen29.git'
    },
    {
      title: 'Weather App',
      image: '/weatherApp.PNG',
      site:'https://weatherapp-gen29.netlify.app',
      paragraph: 'Pagina que contiene información del clima en tiempo real, información extraida de un API publica',
      tecnologys: 'HTML, CSS, API, React JS',
      github: 'https://github.com/eligio12/ent2-gen29.git'
    },
    {
      title: 'E-Commerce',
      image: '/ecommerce.PNG',
      site:'https://academlo-store-g29.netlify.app/',
      paragraph: 'Pagina que contiene un e-commerce de ropa, información extraída de un API publica',
      tecnologys: 'HTML, CSS, API, JavaScript',
      github: 'https://github.com/AmayaJD/AcademloStore.git'
    }
  ]

  const previus = () => {
      setCurrentSlide((currentSlide - 1 + sliders.length)%sliders.length)
  }
  const next = () => {
      setCurrentSlide((currentSlide + 1)%sliders.length)
  }

  return (
    <div className="principal__projects" id="projects">
      <h2 className="projects__title">Mis Proyectos</h2>
      <div className="slider__box">
        <i onClick={previus} id="left" className='bx bx-chevron-left PreviusNext previus'></i>
        {
          sliders.map((slide, index) => (
            <section key={index} id="sliderId" className={`${ index === currentSlide ? 'slider__box--carousel' : 'hidden'}`} >
              <div className="container__imgSlider">
                <h3>{slide.title}</h3>
                <div className="container__imgSlider--content">
                  <div className="container__imgSlider--redirection">
                    <a className="container__imgSlider--img" href={slide.site} target="_blank"><img src={slide.image} alt="" /></a>
                    <span className="container__imgSlider-span"><a href={slide.site} target="_blank">Visitar Pagina<i className='bx bx-chevrons-right redirection'></i></a></span>
                  </div>
                  <div className="container__imgSlider--info">
                    <p>{slide.paragraph}</p>
                    <p className="container__imgSlider--tec"><span>Tecnologías:</span> {slide.tecnologys}</p>
                    <p><a href={slide.github} target="_blank"><i className='bx bxl-github container__imgSlider--github'></i></a></p>
                  </div>
                </div>
              </div>
            </section>
          ))
        }
        <i onClick={next} id="right" className='bx bx-chevron-right PreviusNext next' ></i>
      </div>
    </div>
  )
}

export default Projects
