import React from 'react'
import Logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* Divider */}
      <div className='max-w-[1500px] m-auto h-[1px] bg-white opacity-10'></div>
      
      {/* Footer Top */}
      <footer className="main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
        <Link to='/'>
          <img src={Logo} alt="Logo" className='h-10 w-auto' />
        </Link>
        <div>
          <h5 className='font-medium mb-5'>Servicios</h5>
          <ul className='flex flex-col gap-2 text-base lg:text-lg'>
            <li><a href="">UI / UX</a></li>
            <li><a href="">Desarrollo web</a></li>
          </ul>
        </div>
        <div>
          <h5 className='font-medium mb-5'>Accesibilidad</h5>
          <ul className='flex flex-col gap-2 text-base lg:text-lg'>
            <li>Lun - Vie: 7am - 6pm</li>
            <li>24/7 WhatsApp & Correo</li>
          </ul>
        </div>
        <div>
          <h5 className='font-medium mb-5'>Contáctame</h5>
          <ul className='flex flex-col gap-2 text-base lg:text-lg'>
            <li>dev.andrez18@gmail.com</li>
            <li>+57 314 702 1433</li>
          </ul>
        </div>
      </footer>

      {/* Divider */}
      <div className='max-w-[1500px] m-auto h-[1px] bg-white opacity-10'></div>

      {/* Footer Bottom */}
      <div className='main-container grid md:grid-cols-1 gap-3 py-6 lg:py-8 max-md:text-center'>
        <div className='text-base lg:text-lg'>© 2025 AG | Todos los derechos reservados</div>
        <div className='flex gap-3 justify-center md:justify-end'>
          <a href="https://www.linkedin.com/in/andr%C3%A9s-g%C3%B3mez-084695355/">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.67481 6.25003C8.67447 6.91307 8.41076 7.54882 7.94169 8.01743C7.47261 8.48604 6.8366 8.74911 6.17356 8.74878C5.51051 8.74845 4.87476 8.48474 4.40615 8.01566C3.93755 7.54659 3.67447 6.91057 3.67481 6.24753C3.67514 5.58449 3.93885 4.94874 4.40792 4.48013C4.877 4.01152 5.51301 3.74845 6.17605 3.74878C6.8391 3.74911 7.47485 4.01282 7.94346 4.4819C8.41206 4.95097 8.67514 5.58699 8.67481 6.25003ZM8.74981 10.6H3.7498V26.25H8.74981V10.6ZM16.6498 10.6H11.6748V26.25H16.5998V18.0375C16.5998 13.4625 22.5623 13.0375 22.5623 18.0375V26.25H27.4998V16.3375C27.4998 8.62503 18.6748 8.91253 16.5998 12.7L16.6498 10.6Z" fill="white"/>
            </svg>
          </a>
          <a href="https://github.com/Andrez18">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="30" height="30" aria-labelledby="githubTitle">
              <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.525.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.651.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.09 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer