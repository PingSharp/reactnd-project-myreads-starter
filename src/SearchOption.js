import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Search from './Search';

class SearchOption extends Component{
    render(){
        return(
        <div className="open-search">
              <Link to="/search">Add a book</Link>
        </div>
        )
    }
}

export default SearchOption