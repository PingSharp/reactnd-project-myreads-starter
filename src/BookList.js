import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookListItem from './BookListItem'

const BookList = ({ CurrentlyReading,
  addTo,
  UpdateRating,
  WantToRead,
  Read})=> {
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
              CurrentlyReading.length > 0 &&
              <BookListItem books={CurrentlyReading}
                addTo={addTo}
                isAddedIntoCurrently={true}
                UpdateRating={UpdateRating} />
            }
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            {
              WantToRead.length > 0 &&
              <BookListItem books={WantToRead}
                addTo={addTo}
                isAddedIntoWant={true}
                UpdateRating={UpdateRating} />
            }
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            {
              Read.length > 0 &&
              <BookListItem books={Read}
                addTo={addTo}
                isAddedIntoRead={true}
                UpdateRating={UpdateRating} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}
  BookList.propTypes = {
    CurrentlyReading: PropTypes.array.isRequired,
    addTo: PropTypes.func,
    UpdateRating: PropTypes.func,
    WantToRead: PropTypes.array.isRequired,
    Read: PropTypes.array.isRequired
  }
  


export default BookList