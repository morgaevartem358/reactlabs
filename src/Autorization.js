import React from 'react';
import { Redirect } from 'react-router-dom';
import './Autorization.css'
class Autorization extends React.Component{
  state = {
    login: '',
    password: '',
    logged: false
  }

  onInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  onAuthSubmit = (e) => {
    const {login, password} = this.state;
    if (login === "1234" && password === "1234"){
      this.setState({
        logged: true
      })
    } else {
   
alert("STOP IT!");
    }
  }





render(){
  if (this.state.logged){
    return <Redirect to="/users"/>
  }
    return(
        <form className="container" onSubmit={this.onAuthSubmit}>
  <div className="form-group ">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" className="form-control" name="login" id="exampleInputEmail1"  onChange={this.onInputChange}/>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  name = "password" id="exampleInputPassword1" onChange={this.onInputChange}/>
    <button type="submit" className="btn btn-primary" >Submit</button>
  </div>
 
</form>
    )
}
}
export default Autorization;