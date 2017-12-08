import React, { Component } from 'react';
import ChangeShelf from './ChangeShelf'

class BookList extends Component {
  
  render() {
    
    const bookList = this.props.list
    const shelfChange = this.props.shelfChange
    
   	return (
      	<div className="bookshelf-books">
      	<ol className="books-grid">
      	
      {bookList.length > 0 && bookList.map((book) => (
        		<li key={book.id}>
            	<div className="book">
                	<div className="book-top">
                    	<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}> 
							</div>
                          <ChangeShelf book={book} shelfChange={shelfChange} /> 
                          </div>
                          <div className="book-title">{ book.title }</div>
                          <div className="book-authors">{book.authors && book.authors.map((author)=>{
                				return(
                  					<span key={author} className="author-name"> {author}</span>
               						 )
            			})}</div>
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