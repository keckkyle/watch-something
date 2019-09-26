import React from 'react';
import './App.css';
import axios from 'axios'
import Home from './pages/home'
import Movie from './pages/moviePage'
import {Switch,Route} from 'react-router-dom'


class App extends React.Component {
  state = {
    categories: [],
  }
  
  componentDidMount = () => {
    axios.get('https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20').then(result => {
      let data = result.data.data
      let rows = []
      for(let i = 0; i < data.length; i++){
        if(data[i].type === "Multi-Title-Manual-Curation"){
          rows.push(data[i])
        }
      }
      this.setState({
        categories: rows,
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render(){
    return(
      <Switch>
        <Route exact path='/' render={(props)=><Home {...props} categories={this.state.categories}/>} />
        <Route path='/movies/:id' component={Movie} />
      </Switch>
    )
  }
}

export default App;
