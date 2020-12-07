import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import { Autocomplete } from '@material-ui/lab';



class Form extends Component {
    
    constructor(props) {
        super(props);
        
        this.initialState = {
            firstname: '',
            lastname: '',
            email: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        console.log(value);

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { firstname, lastname, email } = this.state; 
      const  top100Films = [
            { title: 'Artem', year: 1994 },
            { title: 'Andrei', year: 1972 },
            { title: 'Roma', year: 1974 },
            { title: 'Inna', year: 2008 },
            { title: 'Vova', year: 1957 },
            { title: "Saha", year: 1993 },
            { title: 'Polina', year: 1994 },
            { title: 'Toha', year: 2003 },
            { title: 'Igor', year: 1966 }]
    

        return (
          <form onSubmit={this.onFormSubmit}>
            <div class="block">
              <label for="firstname">FirstName</label>
              <Autocomplete
                id="firstname"
                freeSolo
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    value={firstname} 
                   
                   onChange={this.handleChange}
                  />
                )}
              />
              {/* <input
                    type="text" 
                    name="firstname" 
                    id="firstname"
                    value={firstname} 
                    onChange={this.handleChange} /> */}
            </div>

            <div class="block">
              <label for="lastname">LastName</label>
              <Autocomplete
                id="lastname"
                freeSolo
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    value={lastname} 
                    onChange={this.handleChange}
                  />
                )}
              />
              {/* <input
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                onChange={this.handleChange}
              /> */}
            </div>

            <div class="block">
              <label for="email">Email</label>
              <Autocomplete
                id="email"
                freeSolo
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="freeSolo"
                    margin="normal"
                    variant="outlined"
                    value={email}
                  />
                )}
              />
              {/* <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={this.handleChange}
              /> */}
            </div>

            <div class="block1">
              <button type="submit">Add User</button>
            </div>
          </form>
        );
    }
}

export default Form;