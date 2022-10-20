import { render, screen } from '@testing-library/react'
import { Element } from '../../src/components/element/Element'

describe('Suite de pruebas para element', () => {
  const props = {
    address: 'Capital Federal',
    title: 'IPhone X',
    price: {
      amount: 3000,
      currency: 'ARS'
    },
    picture: 'http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg',
    free_shipping: true
  }

  test('Should be match with snapshot', () => {
    render(<Element props={ props }></Element>)
    expect(screen).toMatchSnapshot()
  })
})
