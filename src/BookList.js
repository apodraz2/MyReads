import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import ChangeShelf from './ChangeShelf'

class BookList extends Component {
  
  render() {
    
    const bookList = this.props.list
    const shelfChange = this.props.shelfChange
    
   	return (
      	<div className="bookshelf-books">
      	<ol className="books-grid">
      	
      { bookList.map((book) => (
        		<li key={book.id}>
            	<div className="book">
                	<div className="book-top">
                    	<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}> 
							</div>
                          <ChangeShelf book={book} shelfChange={shelfChange} /> 
                          </div>
                          <div className="book-title">{ book.title }</div>
                          <div className="book-authors">{ book.authors[0] }</div>
                        </div>
                      </li>
      		))
  		}
      	</ol>
      	</div>
      )
  }
}

export default BookList;