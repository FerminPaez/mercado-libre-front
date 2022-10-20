import { render, screen } from '@testing-library/react'
import { ElementList } from '../../src/components/element_list/ElementList'

describe('Suite de pruebas para element', () => {
  test('Should be match with snapshot', () => {
    render(<ElementList props={ 'iphone' }></ElementList>)
    expect(screen).toMatchSnapshot()
  })
})
