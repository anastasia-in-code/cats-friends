import React, { Component } from 'react'
import CardsList from '../components/CardsList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component {
   constructor() {
      super()
      this.state = {
         cats: [],
         searchValue: ''
      }
   }

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(users => this.setState({ cats: users }))
   }

   onSearchChange = (event) => {
      this.setState({ searchValue: event.target.value })
   }

   render() {
      const { cats, searchValue } = this.state
      const filteredCats = cats.filter(cat => {
         return cat.name.toLowerCase().includes(searchValue.toLowerCase())
      })
      return !cats.length ?
         <h1 className='tc'>Loading...</h1> :
         <div className='tc'>
            <h1 className='f2'>CATS FROM CARTOONS</h1>
            <SearchBox onSearchChange={this.onSearchChange} />
            <Scroll>
               <CardsList cats={filteredCats} />
            </Scroll>
         </div>
   }
}

export default App