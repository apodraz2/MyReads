import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ChangeShelf extends Component {
  state = {
    book: '', 
    shelf: ''
  }
  
  handleChange = (event) => {
    const shelfChange = this.props.shelfChange
    shelfChange(this.state.book, event) 
  }
	
  componentDidMount(){
    this.setState({book: this.props, shelf: this.props.shelf}) 
  }
  
  render() {
	
    return(
      <div className="book-shelf-changer">
        <select value={this.state.book.shelf} onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
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