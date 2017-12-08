import React, { Component } from 'react'

class ChangeShelf extends Component {
  state = {
    book: '', 
    shelf: ''
  }
  
  render() {
    const book = this.props.book
    const getShelf = this.props.getShelf
    const existingList = this.props.existingList
    let shelf
    if(existingList){
      shelf = getShelf(book, existingList)
    } else {
      shelf = book.shelf 
    }
    return(
      <div className="book-shelf-changer">
        <select onChange={(e) => this.props.shelfChange(book, e)} defaultValue={shelf} >
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