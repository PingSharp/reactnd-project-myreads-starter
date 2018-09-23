import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Search from './Search'
import BookList from './BookList'
import SearchOption from './SearchOption'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    Books: [],
    CurrentlyReading: [],
    WantToRead: [],
    Read: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        Books: books, CurrentlyReading: books.filter(book => book.shelf === "currentlyReading"),
        WantToRead: books.filter(book => book.shelf === "wantToRead"),
        Read: books.filter(book => book.shelf === "read")
      });
    });
  }
  ifInReadIncludes(book) {
    let bookIds = this.state.Read.map(book => book.id);
    if (bookIds.includes(book.id)) {
      let newRead = this.state.Read;
      let index = newRead.indexOf(book);
      newRead.splice(index, 1);
      this.setState({ Read: newRead })
      return true;
    }
  }
  ifInWantToReadIncludes(book) {
    let bookIds = this.state.WantToRead.map(book => book.id);
    if (bookIds.includes(book.id)) {
      let newWRead = this.state.WantToRead;
      let index = newWRead.indexOf(book);
      newWRead.splice(index, 1);
      this.setState({ WantToRead: newWRead });
      return true;
    }
  }
  ifInCurrentlyReadIncludes(book) {
    let bookIds = this.state.CurrentlyReading.map(book => book.id);
    if (bookIds.includes(book.id)) {
      let newCr = this.state.CurrentlyReading;
      let index = newCr.indexOf(book);
      newCr.splice(index, 1);
      this.setState({ CurrentlyReading: newCr });
      return true;
    }
  }
  addTocurrent(book, shelf) {
    let newCurrentlyReading = this.state.CurrentlyReading;
    newCurrentlyReading.push(book);
    this.setState(
      { CurrentlyReading: newCurrentlyReading }
    );
    BooksAPI.update(book, shelf).then((res) => console.log(res)).catch(error => console.log(error));
  }
  addToWant(book, shelf) {
    let newWantToRead = this.state.WantToRead;
    newWantToRead.push(book);
    this.setState(
      { WantToRead: newWantToRead }
    );
    BooksAPI.update(book, shelf).then((res) => console.log(res)).catch(error => console.log(error));
  }
  addToRead(book, shelf) {
    let newRead = this.state.Read;
    newRead.push(book);
    this.setState(
      { Read: newRead }
    );
    BooksAPI.update(book, shelf).then((res) => console.log(res)).catch(error => console.log(error));
  }
  addTo = (book, value) => {
    if (value === 'currentlyReading') {

      if (this.ifInReadIncludes(book)) {
        this.addTocurrent(book, value);
      }
      else if (this.ifInWantToReadIncludes(book)) {
        this.addTocurrent(book, value);
      }
      else {
        if (!this.state.CurrentlyReading.includes(book)) {
          this.addTocurrent(book, value);
        }
        else {
          alert("This book is already added into CurrentlyReading");
        }
      }
    }
    else if (value === 'wantToRead') {
      if (this.ifInReadIncludes(book)) {
        this.addToWant(book, value);
      }
      else if (this.ifInCurrentlyReadIncludes(book)) {
        this.addToWant(book, value);
      }
      else {
        if (!this.state.WantToRead.includes(book)) {
          this.addToWant(book, value);
        }
        else {
          alert("This book is already added into Want to Read!");
        }
      }
    }
    else if (value === 'read') {
      if (this.ifInWantToReadIncludes(book)) {
        this.addToRead(book, value);
      }
      else if (this.ifInCurrentlyReadIncludes(book)) {
        this.addToRead(book, value);
      }
      else {
        if (!this.state.Read.includes(book)) {
          this.addToRead(book, value);
        }
        else {
          alert("This book is already added into Read!");
        }
      }
    }
    else {

    }
    if (!this.state.Books.includes(book)) {
      let newBooks = this.state.Books;
      newBooks.push(book);
      this.setState({
        Books: newBooks
      });
    }
  }
  updateRating = (book, value) => {
    if (value === "+") {
      if (book.averageRating) {
        if (book.averageRating < 5) {
          let rating = book.averageRating;
          rating = ((rating * 10) + 1) / 10;
          let index = this.state.Books.indexOf(book);
          let newBooks = this.state.Books;
          newBooks[index].averageRating = rating;
          this.setState({
            Books: newBooks
          });
        }
        else {
          alert("The highest Rating arrived!");
        }
      }
      else {
        let rating = 0;
        rating = ((rating * 10) + 1) / 10;
        let index = this.state.Books.indexOf(book);
        let newBooks = this.state.Books;
        newBooks[index]["averageRating"] = rating;
        this.setState({
          Books: newBooks
        });
      }
    }
    if (value === "-") {
      if (book.averageRating) {
        if (book.averageRating > 0) {
          let rating = book.averageRating;
          rating = ((rating * 10) - 1) / 10;
          let index = this.state.Books.indexOf(book);
          let newBooks = this.state.Books;
          newBooks[index].averageRating = rating;
          this.setState({
            Books: newBooks
          });
        }
        else {
          alert("Rating cant be smaller than 0!");
        }
      }
      else {
        alert("Rating cant be smaller than 0!");
      }
    }
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={
          () => (
            <BookList CurrentlyReading={this.state.CurrentlyReading}
              WantToRead={this.state.WantToRead}
              Read={this.state.Read}
              addTo={this.addTo}
              UpdateRating={this.updateRating} />
          )
        }
        />
        <Route exact path="/" render={
          () => (
            <SearchOption />
          )
        }
        />

        <Route path="/search" render={
          () => (
            <Search CurrentlyReading={this.state.CurrentlyReading}
              WantToRead={this.state.WantToRead}
              Read={this.state.Read}
              addTo={this.addTo}
              UpdateRating={this.updateRating} />
          )
        }
        />
      </div>
    )
  }
}

export default BooksApp
