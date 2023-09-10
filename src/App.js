import React, { Component } from 'react'
import CardsList from './CardsList'
import SearchBox from './SearchBox'
import { cats } from './cats';

class App extends Component {
   constructor() {
      super()
      this.state = {
         cats: cats,
         searchValue: ''
      }
   }

   onSearchChange = (event) => {
      this.setState({searchValue : event.target.value})
   }

   render() {
      const filteredCats = this.state.cats.filter(cat => {
         return cat.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
      })
      return <div className='tc'>
         <h1>Cats from cartoons</h1>
         <SearchBox searchValue={this.state.searchValue} onSearchChange={this.onSearchChange} />
         <CardsList cats={filteredCats} />
      </div>
   }
}

export default App