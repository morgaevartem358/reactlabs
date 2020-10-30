import React, { Component } from 'react';
import TableList from './TableList';
import Form from './Form';


class TablePage extends Component {
  state = {
      characters: []
  };

  removeCharacter = index => {
      const { characters } = this.state;
  
      this.setState({
          characters: characters.filter((character, i) => { 
              return i !== index;
          })
      });
  }

  handleSubmit = character => {
      this.setState({characters: [...this.state.characters, character]});
  }

  render() {
      const { characters } = this.state;
      
      return (
          <div className="container">
              <Form handleSubmit={this.handleSubmit} />
              <br></br>
              
              <TableList
                  characterData={characters}
                  removeCharacter={this.removeCharacter}
              />
              <h1 class= "who-made-this">Morgaev Artem</h1>
          </div>
      );
  }
}


export default TablePage;