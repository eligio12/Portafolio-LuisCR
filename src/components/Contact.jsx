import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'

const Contact = () => {
  
  const {handleSubmit, register, reset} = useForm()

  const onSubmit = (data, e) => { // Cambié el orden de los parámetros
    e.preventDefault(); // Añadí preventDefault para evitar que el formulario se envíe automáticamente
    emailjs.sendForm('service_rn126sg', 'template_7aoc5pu', e.target, 'tiSwRXh6hK5Dbwq-g', data)
      .then((res) => {
        console.log(res);
        reset({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Contacto</h2>
      <div className="contact__writeMe">
        <form onSubmit={handleSubmit(onSubmit)} className="contact__writeMe--form">
          <label htmlFor="name" >Nombre</label>
          <input {...register("name")} name='name' type="text"placeholder="👨🏻‍💼 Ingrese su nombre" />
          <label htmlFor="email" >Correo electrónico</label>
          <input name='email' type="email" {...register("email")} placeholder="@ Ingrese su correo"/>
          <label htmlFor="message">Mensaje</label>
          <textarea {...register("message")} placeholder="✉ Ingrese su mensaje" name="message" id="" cols="30" rows="10"></textarea>
          <button><i className='bx bxl-telegram' ></i> Enviar</button>
        </form>
      </div>
      <div className="social__networks">
        <ul className="social__networks--list">
          <li><a href="https://www.linkedin.com/in/luis-eligio-cortes-rodarte-713900295/" target="_blank" className="socialNetworks"><i className='bx bxl-linkedin-square linkedin--icon' ></i></a></li>
          <li><a href="https://github.com/eligio12" target="_blank" className="socialNetworks"><i className='bx bxl-github github--icon'></i></a></li>
          <li><a href="mailto:luis.cortes7593@alumnos.udg.mx" target="_blank" className="socialNetworks"><i className='bx bxl-gmail gmail--icon' ></i></a></li>
        </ul>
        <p> © Luis Cortes. Todos los derechos reservados</p>
      </div>
    </div>
  )
}

export default Contact
