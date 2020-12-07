import React, { Component } from 'react';
import TableList from './TableList';
import Form from './Form';


class TablePage extends Component {
  state = {
      characters: [{
        firstname:'Ivan', lastname:'Ivanov', email:'123@mail.ru'
      },
      {
        firstname:'Petr', lastname:'PEtrov', email:'45678@mail.ru'
      }]
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
              />
              <h1 class= "who-made-this">Morgaev Artem</h1>
          </div>
      );
  }
}



export default TablePage;