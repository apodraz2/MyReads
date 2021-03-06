import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import BookPage from './BookPage'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  /**state object to hold the current booklist**/
  state = {
    bookList: []
  }
  handleChange = (book,shelf) => {
    const value = shelf.target.value === undefined ? 'none' : shelf.target.value
    
    BooksAPI.update(book, value).then((books) => {
      
      this.getBookList()
    })
                                                   
  }
  
  getBookList = () => {
    BooksAPI.getAll().then((books) => {
      this.setState( {bookList: books} )
	  
  	})
  }
  
  componentDidMount() {
    /**making the api call to populate the booklist**/
    this.getBookList()
	
  }

  render() {
    return (
      <div>
        
        <Route exact path='/' render={() => (
          <BookPage list={this.state.bookList} shelfChange={this.handleChange}/>
        )}/>

        <Route path='/search' render={({ history }) => (
          <SearchPage shelfChange={this.handleChange} bookList={this.state.bookList}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
