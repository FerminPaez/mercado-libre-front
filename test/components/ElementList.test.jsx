import { render, screen } from '@testing-library/react'
import { ElementList } from '../../src/components/element_list/ElementList'

describe('Suite de pruebas para element', () => {
  test('Should be match with snapshot', () => {
    const { container } = render(<ElementList props={ 'iphone' } />)
    expect(container).toMatchSnapshot()
  })

  test('Should be match with snapshot when the elements are load', async () => {
    render(<ElementList search={ 'iphone' } />)
    expect(screen).toMatchSnapshot()
  })
})
