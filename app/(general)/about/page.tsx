import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About Page',
  description: 'Acerca de nosotros', //ahora es lo mas importante
  keywords: ['About', 'Acerca de nosotros', 'Mision']
}

const AboutPage = () => {
  return (
    <>
      <span className='text-7xl' >
        About Nosotros
      </span>
     </>
  )
}

export default AboutPage;