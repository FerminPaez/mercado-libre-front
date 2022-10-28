import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getList } from '../../services/services'
import { Element } from '../element/Element'

export const ElementList = ({ search }) => {
  const [elementList, setElementList] = useState('')
  const { current: myArray } = useRef(elementList)
  const [error, setError] = useState('')

  useEffect(() => {
    const setList = async () => {
      if (search !== null && search !== '' && search !== undefined) {
        const respjson = await getList(search)
        console.log(respjson)
        if (respjson === 404) {
          setError(respjson)
        } else setElementList(respjson.items)
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
        : error !== 404 ? <p>Cargando</p> : <p>Estamos teniendo problemas para realizar esta busqueda</p>
      }
    </div>
  )
}
