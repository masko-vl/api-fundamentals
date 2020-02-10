import React, {Component} from 'react'
import './App.css';
import Header from './components/header/header'
import Location from './components/location/location'
import Social from './components/social/social'
import axios from 'axios'

class App extends Component {
    state = {
        data: {},
        isLoading: true,
        hey: "HELLO",
        //error: ""
    }

    async componentDidMount(){
       /* console.log("Component did mount")
        fetch("https://api.github.com/users/masko-vl")
            //el fetch te devuelve una promesa que es una response
        .then(res=>res.json())
        //coge la response de la promesa y conviertelo  json
        //como tratamos la promesa de la response: con otro then
        .then(info => this.setState({
          data:info,
          isLoading: false

        }))
          //console.log(info))
        //info es la data recuperqada de la api por lo que para introducirla dentro de mi api creamos 
         .catch(error => {
          console.log('hey', error)
          return(
          this.setState({
            error
          })
        )} */

        //WITH AXIOS INSTEAD OF FETCH
        //npm install axios

        //{data}: lo que venga guardalo dentro de la variabla data
        const {data} = await axios("https://api.github.com/users/masko-vl")
        console.log(data)
        this.setState({
          data, 
          //si se llaman igual el state object comola const creada para modificar el valor no hace falta poner data : data
          isLoading: false
        })
        
    }
    render(){
        console.log('render')
        return(
            <div>
                <h1>{this.state.hey}</h1>
                {
                  this.state.isLoading
                  ? <h1>LOADING...</h1>
                  ://its necesari to put both elements in the same div!! to display its
                  <div><Header name ={this.state.data.name}/> 
                  <Location location={this.state.data.location}/>
                  <Social 
                    stars={this.state.data.following}
                    repos={this.state.data.public_repos}
                  />
                  </div>
                }
                
            </div>
        )
    }
}

export default App;
