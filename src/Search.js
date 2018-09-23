import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookListItem from './BookListItem'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class Search extends Component {
    static PropTypes = {
        CurrentlyReading: PropTypes.array,
        WantToRead: PropTypes.array,
        Read: PropTypes.array,
        addTo: PropTypes.func
    }
    state = {
        query: '',
        results: []
    }
    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        });
        BooksAPI.search(query.trim()).then((books) => {
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
                        Read={this.props.Read} addTo={this.props.addTo} updateRating={false} />) : (<div>Sorry!There is no book about {this.state.query},please change your input,and try again!</div>)}
                </div>
            </div>
        )

    }
}

export default Search