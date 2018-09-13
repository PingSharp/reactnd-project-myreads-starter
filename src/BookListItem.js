import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class BookListItem extends Component{
    render(){
        return(
                 <div className="bookshelf-books">
                    <ol className="books-grid">
                     {this.props.books.map((book)=>(
                        <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={"move"} onChange={(event)=>this.props.addToCurrent(book,event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                {this.props.isAddedIntoCurrently?( <option value="currentlyReading" >✓Currently Reading</option>):
                                (<option value="currentlyReading" >Currently Reading</option>)} 
                                {this.props.isAddedIntoWant?( <option value="wantToRead" >✓Want to Read</option>):
                                (<option value="wantToRead" >Want to Read</option>)}
                                {this.props.isAddedIntoRead?( <option value="read" >✓Read</option>):
                                (<option value="read" >Read</option>)}                  
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors[0]}</div>
                        </div>
                      </li>
                     ))}
                     
                    </ol>
                  </div>
        )
    }
}

export default BookListItem