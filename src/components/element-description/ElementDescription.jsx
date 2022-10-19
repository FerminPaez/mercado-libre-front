import { useEffect, useState } from 'react'
import { getDescription } from '../../services/services'
import { formatAmount } from '../../utils/strings'
import './elementDescription.css'

export const ElementDescription = ({ id }) => {
  const [description, setDescritpion] = useState('')
  const [amount, setAmount] = useState('0')
  const [decimals, setDecimals] = useState('00')
  useEffect(() => {
    const setDescritpions = async () => {
      const response = await getDescription(id)
      const responsejson = await response.json()
      setDescritpion(responsejson)
      const [amount, decimals] = formatAmount(responsejson.price.amount)
      setAmount(amount)
      setDecimals(decimals)
    }
    setDescritpions()
  }, [])

  return (
    description &&
    <div className='bgc-lwg'>
      <div className='container bgc-w'>
        <div className="row pt-32 justify-content-around">
          <img src={description.picture} alt="imagen del producto" className='col-5 img-description'/>
          <div className="col-3">
            <p className='pb-16'>
              { description.condition === 'new' ? 'Nuevo' : 'Usado' }
             - { description.sold_quantity } vendidos </p>
            <h1 className='pb-32'>{ description.title }</h1>
            <h2 className='amount pb-32'>$ { amount } <span>{ decimals }</span></h2>
            <button className='comprar'> Comprar </button>
          </div>
        </div>
        <section className='col-7 margin-top-100 ml-32'>
          <h2 className='mb-32'>Descricion del producto</h2>
          <p>{ description.description }</p>
        </section>
      </div>
    </div>
  )
}
