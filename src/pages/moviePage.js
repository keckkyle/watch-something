import React from 'react';
import axios from 'axios';
import Poster from '../component/poster'
import People from '../component/people'



class App extends React.Component {
  state = {
    id: this.props.match.params.id,
    movie: {},
    poster: '',
    background: '',
  }


  componentDidMount = () => {
    axios.get(`https://cdn-discover.hooq.tv/v1.2/discover/titles/${this.state.id}`).then(result => {
      this.setState({
        movie: result.data.data
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render(){
    const {movie} = this.state
    return(
      <div>
        <div className='left'>
          {movie.images ? <Poster images={movie.images} /> : <></>}
          <h2 className="movie-title">{movie.title}</h2>
          {movie.meta &&
            <>
              <p>{movie.meta.releaseYear}</p>
              <p>{movie.meta.ageRating}</p>
            </>
          }
          <p>{movie.running_time_friendly}</p>
          {movie.audios ? 
            <ul>
              {movie.audios.map( audio =>
                <li key={movie.id + audio}>
                  {audio}
                </li>
              )}
            </ul> : <></>
          }
          {movie.languages ? 
            <ul>
              {movie.languages.map( language =>
                <li key={movie.id + language}>
                  {language}
                </li>
              )}
            </ul> : <></>
          }
          {movie.tags ? 
            <ul>
              {movie.tags.map( tag =>
                <li key={movie.id + tag.id}>
                  {tag.label}
                </li>
              )}
            </ul> : <></>
          }
        </div>

        <div className="right">
          <p>{movie.description}</p>
          {movie.people && <People people={movie.people}/>}
        </div>

      </div>  
    )
  }
}

export default App;
