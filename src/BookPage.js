import React, { Component } from 'react'
import BookList from './BookList'

class BookPage extends Component {
  
  
  render(){
    const bookList = this.props.list
    const shelfChange = this.props.shelfChange
    
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>               
                  <BookList list={ bookList.filter((book) => book.shelf === 'currentlyReading') } shelfChange={shelfChange}/>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <BookList list={ bookList.filter((book) => book.shelf === 'wantToRead') } shelfChange={shelfChange}/>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <BookList list={ bookList.filter((book) => book.shelf === 'read') } shelfChange={shelfChange}/>
				</div>
            </div>
            <div className="open-search">
              <a href='/search'>Add a book</a>
            </div>
          </div>
		</div>
	)
  }
}

export default BookPage