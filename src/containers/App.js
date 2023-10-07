import React, {  useState, useEffect } from 'react'
import CardsList from '../components/CardsList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

const App = () => {
   const [cats, setCats] = useState([])
   const [searchValue, setSearchValue] = useState('')

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(users => setCats(users))
   }, [])

   const onSearchChange = (event) => {
      setSearchValue(event.target.value)
   }

   const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchValue.toLowerCase())
   })

   console.log(cats)
   return !cats.length ?
      <h1 className='tc'>Loading...</h1> :
      <div className='tc'>
         <h1 className='f2'>CATS FROM CARTOONS</h1>
         <SearchBox onSearchChange={onSearchChange} />
         <Scroll>
            <ErrorBoundary>
               <CardsList cats={filteredCats} />
            </ErrorBoundary>
         </Scroll>
      </div>
}

export default App