import React, { Component } from 'react'
import BookList from './BookList'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  state={
  	query: '',
    list: []
  }
  
  updateQuery = (query) => {
    this.setState({ query: query })
    
  }

  render() {
    
    let showingBooks
    if (this.state.query) {
      BooksAPI.search(this.state.query, 10).then((books) => {
    	
    	this.setState({list: books })
		}
      )
    } 
    
    return(
     <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" href='/'>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" 
      			value={this.state.query}
            	onChange={(event) => this.updateQuery(event.target.value)}/>

				<BookList list={this.state.list} shelfChange={this.shelfChange}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
	)
  }
}

export default SearchPage