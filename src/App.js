import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Search from './Search'
import BookList from './BookList'
import SearchOption from './SearchOption'
import BookListItem from './BookListItem'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
   Books: [],
   CurrentlyReading: [],
   WantToRead: [],
   Read: []
  }
  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({Books: books,CurrentlyReading: books.slice(0,2),WantToRead: books.slice(2,4),Read: books.slice(4)})
    });
  }
  addToCurrentlyReadding = (book,value)=>{
    if(value === 'currentlyReading'){

      if(this.state.Read.includes(book)){
        let newCurrentlyReading = this.state.CurrentlyReading;
        newCurrentlyReading.push(book);
        this.setState(
        {CurrentlyReading:newCurrentlyReading}
        )
        let newRead = this.state.Read;
        let index = newRead.indexOf(book);
        newRead.splice(index,1);
        this.setState({Read: newRead})
      }
      else if(this.state.WantToRead.includes(book)){
        let newCurrentlyReading = this.state.CurrentlyReading;
        newCurrentlyReading.push(book);
        this.setState(
        {CurrentlyReading:newCurrentlyReading}
        )
        let newWRead = this.state.WantToRead;
        let index = newWRead.indexOf(book);
        newWRead.splice(index,1);
        this.setState({WantToRead: newWRead})
      }
      else{
        if(!this.state.CurrentlyReading.includes(book)){
        let newCurrentlyReading = this.state.CurrentlyReading;
        newCurrentlyReading.push(book);
        this.setState(
        {CurrentlyReading:newCurrentlyReading}
        )
        }
        else{
        alert("This book is already added into CurrentlyReading")
        }
      }
    }
    else if(value === 'wantToRead'){
      if(this.state.Read.includes(book)){
        let newWantToRead = this.state.WantToRead;
        newWantToRead.push(book);
        this.setState(
        {WantToRead:newWantToRead}
        )
        let newRead = this.state.Read;
        let index = newRead.indexOf(book);
        newRead.splice(index,1);
        this.setState({Read: newRead})
      }
      else if(this.state.CurrentlyReading.includes(book)){
        let newWantToRead = this.state.WantToRead;
        newWantToRead.push(book);
        this.setState(
        {WantToRead:newWantToRead}
        )
        let newCr = this.state.CurrentlyReading;
        let index = newCr.indexOf(book);
        newCr.splice(index,1);
        this.setState({CurrentlyReading: newCr})
      }
      else{
        if(!this.state.WantToRead.includes(book)){
          let newWantToRead = this.state.WantToRead;
          newWantToRead.push(book);
          this.setState(
          {WantToRead:newWantToRead}
          )
        }
        else{
        alert("This book is already added into Want to Read!")
        }
      }
    }
    else if(value === 'read'){
      if(this.state.WantToRead.includes(book)){
        let newRead = this.state.Read;
        newRead.push(book);
        this.setState(
        {Read:newRead}
        )
        let newWRead = this.state.WantToRead;
        let index = newWRead.indexOf(book);
        newWRead.splice(index,1);
        this.setState({WantToRead: newWRead})
      }
      else if(this.state.CurrentlyReading.includes(book)){
        let newRead = this.state.Read;
        newRead.push(book);
        this.setState(
        {Read:newRead}
        )
        let newCr = this.state.CurrentlyReading;
        let index = newCr.indexOf(book);
        newCr.splice(index,1);
        this.setState({CurrentlyReading: newCr})
      }
      else{
        if(!this.state.Read.includes(book)){
        let newRead = this.state.Read;
        newRead.push(book);
        this.setState(
        {Read:newRead}
        )
        }
        else{
        alert("This book is already added into Read!")
        }
      }
    }
    else{

    }

  }
  render() {
    return (
      <div className="app">
          <Route exact path="/" render = {
            ()=>(
              <BookList currentlyReading={this.state.CurrentlyReading}
              wantToRead={this.state.WantToRead}
               read={this.state.Read}
               addToCurrent={this.addToCurrentlyReadding}/>
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
             <Search currentlyReading={this.state.CurrentlyReading}
              wantToRead={this.state.WantToRead}
               read={this.state.Read}
               addToCurrent={this.addToCurrentlyReadding}/>
           )
         }
         /> 
      </div>
    )
  }
}

export default BooksApp
