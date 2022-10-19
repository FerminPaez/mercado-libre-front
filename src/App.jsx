import React, { useEffect, useState } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import { Home } from './views/Home'
import { Description } from './views/Description'
import { Searcher } from './components/searcher/Searcher'

const WhitePage = () => <p>Esperando busqueda</p>
export const App = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  useEffect(() => {
    setSearch(searchParams.get('search'))
  }, [searchParams, setSearchParams])

  return (
    <>
      <Searcher setSearchParams={setSearchParams}></Searcher>
      <Routes>
        <Route path='/' element={<WhitePage />}/>
        <Route path='/items*' element={<Home searchParams={{ search }}/>}/>
        <Route path='/items/:id' element={<Description />} />
      </Routes>
    </>
  )
}
