import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getList } from '../../services/services'
import { Element } from '../element/Element'

export const ElementList = ({ search }) => {
  const [elementList, setElementList] = useState('')
  const { current: myArray } = useRef(elementList)

  useEffect(() => {
    const setList = async () => {
      if (search !== null && search !== '' && search !== undefined) {
        const respjson = await getList(search)
        setElementList(respjson.items)
      }
    }
    setList()
  }, [search, myArray])

  return (
    <div className='container p-0'>
      {
      elementList !== '' || elementList === undefined || typeof elementList !== 'string'
        ? elementList.map(elemento => {
          return (
            <Link to={`/items/${elemento.id}`} key={elemento.id}>
              <Element props={elemento}/>
            </Link>)
        })
        : <p>Cargando</p>
      }
    </div>
  )
}
