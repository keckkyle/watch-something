import React from 'react';
import axios from 'axios';
import Poster from '../component/poster'
import People from '../component/people'
import List from '../component/list'



class App extends React.Component {
  state = {
    id: this.props.match.params.id,
    movie: {},
    poster: '',
    background: '',
  }



  componentDidMount = () => {
    this.props.toggleMoviePage(true)
    axios.get(`https://cdn-discover.hooq.tv/v1.2/discover/titles/${this.state.id}`).then(result => {
      this.setState({
        movie: result.data.data
      })
    }).catch(error => {
      console.log(error)
    })
  }

  componentWillUnmount = () => {
    this.props.toggleMoviePage(false)
  }

  render(){
    const {movie} = this.state
    return(
      <div className="movie-page">
        <div className='left'>
          {movie.images ? <Poster images={movie.images} /> : <></>}
          <h2 className="movie-title">{movie.title}</h2>
          <div className="movie-info-container">
            <p className="movie-info">{movie.running_time_friendly}</p>
            {movie.meta &&
              <>
                <p className="movie-info">{movie.meta.releaseYear}</p>
                <p className="movie-info">{movie.meta.ageRating}</p>
              </>
            }
          </div>
        </div>

        <div className="right">
          <p className="description">{movie.description}</p>
          {movie.people && <People people={movie.people}/>}
          <div className='info-lists'>
            <List title='Audio' listData={movie.audios} />
            <List title='Captions' listData={movie.languages} />
            {movie.tags ? 
              <div className="list-group">
                <p className="list-group-title">Genre:</p>
                <ul className='list-input'>
                  {movie.tags.map( tag =>
                    <li key={movie.id + tag.id}>
                      {tag.label}
                    </li>
                  )}
                </ul> 
              </div>: <></>
            }
          </div>
        </div>

      </div>  
    )
  }
}

export default App;
