import { render, screen } from '@testing-library/react'
import { RouteDescription } from '../../src/components/route-description/RouteDescription'

describe('Suite de pruebas para element', () => {
  test('Should be match with snapshot', () => {
    render(<RouteDescription />)
    expect(screen).toMatchSnapshot()
  })
})
