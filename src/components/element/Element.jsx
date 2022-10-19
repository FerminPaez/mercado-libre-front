// import React, { useState } from 'react'
import './element.css'
import freeShippingIcon from '../../assets/ic_shipping.png'
import { getCurrencySymbol } from '../../utils/strings'

export const Element = ({ props }) => {
  const { address, title, price, picture, free_shipping: freeShipping } = props
  const currencySign = getCurrencySymbol(price.currency)

  return (
        <div className="pt-16 pl-16 pb-16 row">
          <img src={ picture } alt="imagen del producto" className="pr-16 col-2 img-list"/>
          <div className="col-md-8 col-sm-6">
            <p className='pt-32 fs-24'>{ currencySign } { price.amount } { freeShipping === true && <img src={freeShippingIcon} alt="free shipping" /> }</p>
            <p className='pt-32 fs-18'>{ title }</p>
          </div>
            <p className='col-lg-2 col-md-1 fs-12 pt-32'>{address}</p>
        </div>
  )
}
