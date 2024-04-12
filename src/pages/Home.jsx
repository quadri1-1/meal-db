import React from 'react'
import { useGlobalContext } from '../hooks/context'
import SearchForm from '../components/SearchForm'
import MealList from '../components/MealList'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Banner/>
      <SearchForm/>
      <MealList/>
    </div>
  )
}

export default Home