import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Precios de Productos', //ahora es lo mas importante
  keywords: ['Precios', 'Descuentos', 'Bonito','Barato']
}

const PricingPage = () => {
  return (
    <span className='text-7xl'>PricingPage</span>
  )
}

export default PricingPage

