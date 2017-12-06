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
  handleChange = (book,event) => {
    console.log(book)
    book.shelf = event.target.value
    console.log(book)
    this.setState(this.state.bookList.append(book))
    
  }
  
  componentDidMount() {
    /**making the api call to populate the booklist**/
    const bookList = BooksAPI.getAll().then((books) => {
      
      this.setState( {bookList: books} )
	  
  	})
	
  }

  render() {
    return (
      <div>
        
        <Route exact path='/' render={() => (
          <BookPage list={this.state.bookList} shelfChange={this.handleChange}/>
        )}/>

        <Route path='/search' render={({ history }) => (
          <SearchPage />
        )}/>
      </div>
    )
  }
}

export default BooksApp
