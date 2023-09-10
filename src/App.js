import React, { Component } from 'react'
import CardsList from './CardsList'
import SearchBox from './SearchBox'
import { cats } from './cats';
import './App.css'

class App extends Component {
   constructor() {
      super()
      this.state = {
         cats: cats,
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
      const filteredCats = this.state.cats.filter(cat => {
         return cat.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
      })
      if (!this.state.cats.length) {
         return <h1 className='tc'>Loading...</h1>
      }
      return <div className='tc'>
         <h1 className='f2'>CATS FROM CARTOONS</h1>
         <SearchBox searchValue={this.state.searchValue} onSearchChange={this.onSearchChange} />
         <CardsList cats={filteredCats} />
      </div>
   }
}

export default App