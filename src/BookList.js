import React, {Component} from 'react'
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
                    this.props.CurrentlyReading.length > 0 &&
                    <BookListItem books={this.props.CurrentlyReading} addToCurrent={this.props.addToCurrent} isAddedIntoCurrently = {true}/>
                }
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  {
                    this.props.WantToRead.length > 0 &&
                    <BookListItem books={this.props.WantToRead} addToCurrent={this.props.addToCurrent} isAddedIntoWant = {true}/>
                  }
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  {
                    this.props.Read.length > 0 &&
                    <BookListItem books={this.props.Read} addToCurrent={this.props.addToCurrent} isAddedIntoRead = {true}/>
                }
                </div>
              </div>
            </div>
            </div>
        )
    }
}

export default BookList