import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.books = [
      { title: 'Ready Player One', author: 'Ernest Cline' },
      { title: 'All the Light We Cannot See', author: 'Anthony Doerr' },
      { title: 'The First and Last Freedom', author: 'Jiddu Krishnamurti' },
    ];
    this.state = {
      bookNumber: 0
    }
  }

  goToNextBook(){
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber++;
    if(tempBookNumber === this.books.length){
    tempBookNumber = 0;
    }
    this.setState({
    bookNumber: tempBookNumber
    });
    }

  
  render() {
    return (
      <div className="container-fluid">
        <TitleBar />
        <div className="row row-spacer">
          <div className="col-md-4">
            {/*Button here to move to the previous book viewed*/}
          </div>
          <div className="col-md-4">
            <h1>{this.books[this.state.bookNumber].title}</h1>
            <h4>{this.books[this.state.bookNumber].author}</h4>
          </div>
          <div className="col-md-4">
            {/*Button here to move to the previous book viewed*/}
          </div>
        </div>
      </div>

    );
  }
}
export default App;