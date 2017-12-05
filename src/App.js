import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import BookPage from './BookPage'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    bookList: []
  }
  
  componentDidMount() {
    const bookList = BooksAPI.getAll().then((books) => {
      
      this.setState( {bookList: books} );
	  
  	});
	
  }

  changeBookShelf = (book, newShelf) => {
    book.shelf = newShelf
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <BookPage list={this.state.bookList}/>
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchPage list={this.state.bookList}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
