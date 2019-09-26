import React from 'react'
import Movie from './movie'


class HorizontalScroll extends React.Component {
  state = {
    numMovies: this.props.movies.length,
    movieWidth: 0,
    movieDisplay: 0,
    currentPosition: 0,
    barWidth: 0
  }
  scrollBox = React.createRef()

  updateDimensions = () => {
    let display = 0
    let style = window.getComputedStyle(this.scrollBox.current)
    let padding = parseInt(style.getPropertyValue('padding-left'))
    let width = (this.scrollBox.current.scrollWidth-(padding*2))/this.state.numMovies
    if( window.innerWidth < 450 ){
      display = 2
    } else if ( window.innerWidth < 600 ){
      display = 3
    } else if ( window.innerWidth < 950 ){
      display = 5
    } else {
      display = 7
    }
    this.setState({
      movieWidth: width,
      barWidth: this.scrollBox.current.scrollWidth - width,
      movieDisplay: display,
    })
    this.scrollBox.current.scrollLeft = this.state.currentPosition * this.state.movieWidth
  }

  scrollLeft = () => {
    let newPosition = this.state.currentPosition - this.state.movieDisplay
    this.scrollBox.current.scrollTo({
      top: 0,
      left: newPosition*this.state.movieWidth,
      behavior: 'smooth'
    })
    if(newPosition >= 0){
      this.setState({
        currentPosition: newPosition,
      })
    } else {
      this.setState({
        currentPosition: 0,
      })
    }
  }

  componentDidMount = () => {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  scrollRight = () => {
    let newPosition = this.state.currentPosition+ this.state.movieDisplay
    this.scrollBox.current.scrollTo({
      top: 0,
      left: newPosition*this.state.movieWidth,
      behavior: 'smooth'
    })
    if(newPosition < this.state.numMovies){
      this.setState({
        currentPosition: newPosition,
      })
    }
  }

  render(){
    return(
      <div className="scroll-container">
        <div 
          className="scroll-horizontal" 
          ref={this.scrollBox}
        >
          {this.props.movies.map(movie =>
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              images={movie.images}
            >
              </Movie>
          )}
        </div>
        <div className="left-container" onClick={this.scrollLeft}>
          <div className="left-arrow"></div>
        </div>
        <div className="right-container" onClick={this.scrollRight}>
          <div className="right-arrow"></div>
        </div>
      </div>
    )
  }
}



export default HorizontalScroll