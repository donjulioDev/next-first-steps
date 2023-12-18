import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Nuesta direccion es muy cerca y perrona', //ahora es lo mas importante
  keywords: ['Contacto', 'Direccion', 'Aqui']
}

const ContactPage = () => {
  return (
    <>
      <span className='text-7xl' >
        ContactPage
      </span>
     </>
  )
}

export default ContactPage