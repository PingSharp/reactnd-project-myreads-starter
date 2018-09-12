import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Search from './Search'
import BookList from './BookList'
import SearchOption from './SearchOption'

class BooksApp extends React.Component {
  state = {
   
  }

  render() {
    return (
      <div className="app">
          <Route exact path="/" render = {
            ()=>(
              <BookList/>
            )
          }
          />
          <Route exact path="/" render = {
            ()=>(
              <SearchOption/>
            )
          }
          />
            
         <Route path="/search" render = {
           ()=>(
             <Search/>
           )
         }
         />        
      </div>
    )
  }
}

export default BooksApp
