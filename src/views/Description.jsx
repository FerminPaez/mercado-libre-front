
import { useParams } from 'react-router-dom'
import { ElementDescription } from '../components/element-description/ElementDescription'
import { RouteDescription } from '../components/route-description/RouteDescription'

export const Description = () => {
  const { id } = useParams()

  return (
    <>
      <RouteDescription />
      <ElementDescription id={ id }/>
    </>
  )
}
