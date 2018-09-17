import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import BookListItem from './BookListItem'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
    state = {
        query:'',
        results: []

    }
    updateQuery = (query)=>{
        this.setState({
            query: query.trim()
        })
        BooksAPI.search(query.trim()).then((books)=>{
            if(books){
                console.log(books)
            this.setState({
                results: books
            })}
           
         }).catch((error)=>{
             alert(error);
         })
    }
    render(){
       
        
        return(
        <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/" >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event)=>this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
                {this.state.results.length>0?(<BookListItem books={this.state.results} currentlyReading={this.props.currentlyReading} 
              wantToRead={this.props.wantToRead}
               read={this.props.read} addToCurrent = {this.props.addToCurrent}/>):(<div>Sorry!There is no book about {this.state.query},please change your input,and try again!</div>)}
                
            </div>
          </div>
        )

    }
}

export default Search