import React from 'react';
import './App.css';
import axios from 'axios'
import Home from './pages/home'
import Movie from './pages/moviePage'
import NavBar from './component/navbar'
import {Switch,Route} from 'react-router-dom'


class App extends React.Component {
  state = {
    categories: [],
    moviePage: false,
    linksOpen: false,
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

  toggleMoviePage = (state) => {
    this.setState({
      moviePage: state,
      linksOpen: false,
    })
  }

  toggleLinks = () => {
    this.setState({
      linksOpen: !this.state.linksOpen,
    })
  }

  render(){
    return(
      <div className='content'>
      <NavBar 
        categories={this.state.categories} 
        moviePage={this.state.moviePage}
        toggleLinks={this.toggleLinks}
        linksOpen={this.state.linksOpen}
      />
      <main>
        <Switch>
          <Route exact path='/' render={(props)=><Home {...props} categories={this.state.categories}/>} />
          <Route exact path="/page=:num" render={(props)=><Home {...props} categories={this.state.categories}/>} />
          <Route exact path='/movies/:id' render={(props)=><Movie {...props} toggleMoviePage={this.toggleMoviePage}/>} />
        </Switch>
      </main>
      <footer>
        <p>Visit <a href="https://www.hooq.tv">HOOQ</a> to <em>watch something</em></p>
      </footer>
      </div>
    )
  }
}

export default App;
