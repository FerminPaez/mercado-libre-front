// import React, { serializeFormQuery } from 'react'
import React, { useState } from 'react'
import './searcher.css'
import LogoML from '../../assets/LogoML.png'
import IcSearch from '../../assets/IcSearch.png'
import { useNavigate } from 'react-router-dom'

// import { useSearchParams } from 'react-router-dom'

export const Searcher = ({ setSearchParams }) => {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const handleSearch = (event) => {
    setSearch(event)
  }

  const searchElements = (event) => {
    event.preventDefault()

    setSearchParams({ search })
    navigate(`/items?search=${search}`)
  }

  return (
    <div className='bgc-y'>
      <div className='container p-0'>
        <nav className='bgc-y d-flex justify-content-between'>
            <div className='col-1'>
                <img src={ LogoML } alt='Logo' width='30' height='24' className='d-inline-block align-text-top' />
            </div>
            <form className='col-11 d-flex' role='search'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Nunca dejes de buscar'
                  aria-label='Nunca dejes de buscar'
                  value={search}
                  onChange={({ target: { value } }) => {
                    handleSearch(value)
                  } }/>
                <button className='button-search bgc-lwg' type='submit' onClick={(event) => searchElements(event)}>
                    <img src={ IcSearch } alt='' />
                </button>
            </form>
        </nav>
      </div>
    </div>
  )
}
