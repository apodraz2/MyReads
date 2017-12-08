import React, { Component } from 'react'

class ChangeShelf extends Component {
  state = {
    book: '', 
    shelf: ''
  }
  
  render() {

	
	const shelf = this.props.book.shelf
    const book = this.props.book
    
    return(
      <div className="book-shelf-changer">
        <select onChange={(e) => this.props.shelfChange(book, e)} defaultValue={shelf === undefined ? 'none' : shelf} >
          <option value="not" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    ) 
  }
}

export default ChangeShelf