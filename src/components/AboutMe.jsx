const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <div className="aboutMe__imgtext">
        <h2 className="aboutMe__name">Acerca de Mí</h2>
        <p>
          "Soy un desarrollador web full stack calificado y profesional con interés por el aprendizaje y el desarrollo de proyectos. Tengo conocimiento en varias herramientas de desarrollo como React JS, Python, JavaScript, CSS, HTML, Node.js, PostgreSQL, MySQL, etc. Con las que realice diferentes proyectos en equipo con la ayuda de GitHub, además de varios proyectos individuales muy completos. "
        </p>
        <div className="about__information">
          <div className="information">
            <h3 className="information__title"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height=".8em" width=".8em" xmlns="http://www.w3.org/2000/svg"><path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"></path></svg> Educación</h3>
            <ul className="education">
              <li className="career">Ingeniería en Computación</li>
              <li className="institution">Universidad de Guadalajara</li>
              <li className="year">2017 - 2022</li>
            </ul>
            <ul className="education">
              <li className="career">Desarrollo Full-Stack - Ciencias de la Computación</li>
              <li className="institution">Academlo</li>
              <li className="year">2022</li>
            </ul>
          </div>
          <div className="information">
            <h3 className="information__title"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-228-32c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H118.4C106 384 96 375.4 96 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"></path></svg> Información</h3>
            <ul className="myInformation">
              <li className="datum"><span>Edad: </span>25</li>
              <li className="datum"><span>Celular: </span>+52 467-102-8465</li>
              <li className="datum"><span>Ubicación: </span>Guadalajara, Jalisco, México</li>
              <li className="email"><span>Email: </span>luis.cortes7593@alumnos.udg.mx</li>
            </ul>
          </div>
          <div className="information">
            <h3 className="information__title">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M437.5 512h-5.5c-7.4 0-13.5-6.1-13.5-13.5v-63.1c-53.1-21-92.4-69.9-104.9-129.9h-60.2c-12.5 60-51.9 109-105 129.9v63.1c0 7.4-6.1 13.5-13.5 13.5h-5.5c-7.4 0-13.5-6.1-13.5-13.5V0c0-7.4 6.1-13.5 13.5-13.5h370.5c7.4 0 13.5 6.1 13.5 13.5v498.5c0 7.4-6.1 13.5-13.5 13.5z"></path>
              </svg> Experiencia Laboral
            </h3>
            <ul className="experience">
              <li className="jobTitle">Desarrollador Web Full Stack</li>
              <li className="institution">Medical Expo</li>
              <li className="year">2022 - 2023</li>
            </ul>
            <ul className="experience">
              <li className="jobTitle">Desarrollador React</li>
              <li className="institution">J&MARJUS</li>
              <li className="year">2023 - Presente</li>
            </ul>
          </div>
        </div>
      </div>
      <img className="aboutMe__img" src="https://media-public.canva.com/BZzls/MAEvmIBZzls/1/tl.png" alt="" />
    </div>

  )
}

export default AboutMe
