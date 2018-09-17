import React, {Component} from 'react'

class BookListItem extends Component{
    render(){
      let currently=[],
      want=[],read=[];
      if(this.props.CurrentlyReading!==undefined&&this.props.WantToRead!==undefined&&this.props.Read!==undefined){
         this.props.CurrentlyReading.map((e)=>(currently.push(e.id)))
         this.props.WantToRead.map((e=>(want.push(e.id))));
         this.props.Read.map((e)=>(read.push(e.id)))
      }
        return(
                 <div className="bookshelf-books">
                    <ol className="books-grid">
                     {this.props.books.map((book)=>(
                        <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                           {book.imageLinks!== undefined&&(<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>)} 
                            <div className="book-shelf-changer">
                              <select defaultValue={"move"} onChange={(event)=>this.props.addToCurrent(book,event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                {(this.props.CurrentlyReading!==undefined&&currently!==undefined&&currently.includes(book.id))||this.props.isAddedIntoCurrently!==undefined?( <option value="currentlyReading" >✓Currently Reading</option>):
                                (<option value="currentlyReading" >Currently Reading</option>)} 
                                {this.props.isAddedIntoWant===true||(this.props.WantToRead!==undefined&&want!==undefined&&want.includes(book.id))?( <option value="wantToRead" >✓Want to Read</option>):
                                (<option value="wantToRead" >Want to Read</option>)}
                                {this.props.isAddedIntoRead===true||(this.props.Read!==undefined&&read!==undefined&&read.includes(book.id))?( <option value="read" >✓Read</option>):
                                (<option value="read" >Read</option>)} 
                                {!currently.includes(book.id)&&!want.includes(book.id)&&!read.includes(book.id)&&
                                this.props.isAddedIntoCurrently===undefined&&this.props.isAddedIntoRead===undefined&&this.props.isAddedIntoWant===undefined
                                 ?(<option value="none">✓None</option>):( <option value="none">None</option>)}                 
                               
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                     ))}
                     
                    </ol>
                  </div>
        )
    }
}

export default BookListItem