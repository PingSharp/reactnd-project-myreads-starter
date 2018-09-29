import React, { Component } from 'react'
import BookListItem from './BookListItem'
import PropTypes from 'prop-types'

class BookList extends Component {
  static propTypes = {
    CurrentlyReading: PropTypes.array.isRequired,
    addTo: PropTypes.func,
    UpdateRating: PropTypes.func,
    WantToRead: PropTypes.array.isRequired,
    Read: PropTypes.array.isRequired
  }
  render() {
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
                <BookListItem books={this.props.CurrentlyReading}
                  addTo={this.props.addTo}
                  isAddedIntoCurrently={true}
                  UpdateRating={this.props.UpdateRating} />
              }
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              {
                this.props.WantToRead.length > 0 &&
                <BookListItem books={this.props.WantToRead}
                  addTo={this.props.addTo}
                  isAddedIntoWant={true}
                  UpdateRating={this.props.UpdateRating} />
              }
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              {
                this.props.Read.length > 0 &&
                <BookListItem books={this.props.Read}
                  addTo={this.props.addTo}
                  isAddedIntoRead={true}
                  UpdateRating={this.props.UpdateRating} />
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookList