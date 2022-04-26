
import SearchBar from './SearchBar'
import React, { Component } from 'react'

export default class App extends Component {
onSearchSubmit(term){
  console.log(term)
}

  render() {
    return (
      <div className='ui container' style={{marginTop:'10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
    )
  }
}

