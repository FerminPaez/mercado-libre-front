import React from 'react'
import { ElementList } from '../components/element_list/ElementList'
import { RouteDescription } from '../components/route-description/RouteDescription'

export const Home = ({ searchParams }) => {
  const { search } = searchParams

  return (
    <>
        <RouteDescription />
         {
          search !== '' && search !== null && (<ElementList search={ search }/>)}
    </>
  )
}
