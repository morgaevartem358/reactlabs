import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



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
     top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 }]

    handleChange = event => {
        const { name, value } = event.target;

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
            { title: 'The Shawshank Redemption', year: 1994 },
            { title: 'The Godfather', year: 1972 },
            { title: 'The Godfather: Part II', year: 1974 },
            { title: 'The Dark Knight', year: 2008 },
            { title: '12 Angry Men', year: 1957 },
            { title: "Schindler's List", year: 1993 },
            { title: 'Pulp Fiction', year: 1994 },
            { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
            { title: 'The Good, the Bad and the Ugly', year: 1966 }]
    

        return (
            
            <form onSubmit={this.onFormSubmit}>
                
                <div class="block"><label for="firstname">FirstName</label>
                <Autocomplete
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
                {/* <input
                    type="text" 
                    name="firstname" 
                    id="firstname"
                    value={firstname} 
                    onChange={this.handleChange} /> */}
                </div>

                <div class="block"><label for="lastname">LastName</label>
                <input 
                    type="text" 
                    name="lastname" 
                    id="lastname"
                    value={lastname} 
                    onChange={this.handleChange} />
                </div>

                

                <div class="block">
                <label for="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={this.handleChange} />
                </div >
                
                <div class="block1">
                <button type="submit">
                    Add User
                </button>
                </div>
                
            </form>
        );
    }
}

export default Form;