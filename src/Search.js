import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookListItem from './BookListItem'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class Search extends Component {
    static propTypes = {
        CurrentlyReading: PropTypes.array.isRequired,
        WantToRead: PropTypes.array.isRequired,
        Read: PropTypes.array.isRequired,
        addTo: PropTypes.func
    }
    /**
     * init the input query and search results array
     */
    state = {
        query: '',
        results: []
    }
    /**
     * search input will be processed with BooksAPI search method,if there are some results, 
     * the results will be stored in the results state,
     * otherwise results state will be set to empty.
    */
    updateQuery = (query) => {
        this.setState({
            query: query
        });
        BooksAPI.search(query.trim().replace(/  +/g, ' ')).then((books) => {
            if (books) {
                this.setState({
                    results: books
                });
            }
            else {
                this.setState({
                    results: []
                }
                );
            }
        }).catch((error) => {
            alert(error);
        })
    }
    render() {
        return (
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
                        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.results.length > 0 ? (<BookListItem books={this.state.results} CurrentlyReading={this.props.CurrentlyReading}
                        WantToRead={this.props.WantToRead}
                        Read={this.props.Read} addTo={this.props.addTo} updateRating={false} />) :
                        this.state.query === '' ? (<div>search terms:'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball',
                             'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook',
                             'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education',
                             'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror',
                              'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez',
                               'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React',
                               'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale',
                         'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'</div>) : (<div>Sorry!There is no book about {this.state.query},please change your input,and try again!</div>
                            )}
                </div>
            </div>
        )

    }
}

export default Search