import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookListItem from './BookListItem'

class BookList extends Component{
    render(){
        return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                {
                    this.props.currentlyReading.length > 0 &&
                    <BookListItem books={this.props.currentlyReading} addToCurrent={this.props.addToCurrent} isAddedIntoCurrently = {true}/>
                }
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  {
                    this.props.wantToRead.length > 0 &&
                    <BookListItem books={this.props.wantToRead} addToCurrent={this.props.addToCurrent} isAddedIntoWant = {true}/>
                  }
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  {
                    this.props.read.length > 0 &&
                    <BookListItem books={this.props.read} addToCurrent={this.props.addToCurrent} isAddedIntoRead = {true}/>
                }
                </div>
              </div>
            </div>
            </div>
        )
    }
}

export default BookList