import { render, screen } from '@testing-library/react'
import { ElementDescription } from '../../src/components/element-description/ElementDescription'

describe('Suite de pruebas para element', () => {
  const props = {
    address: 'Capital Federal',
    title: 'IPhone X',
    price: {
      amount: 3000,
      currency: 'ARS'
    },
    picture: 'https://http2.mlstatic.com/D_865864-MLA46114990464_052021-O.jpg',
    free_shipping: true
  }

  test('Should be match with snapshot', () => {
    render(<ElementDescription props={ props }></ElementDescription>)
    expect(screen).toMatchSnapshot()
  })
})
