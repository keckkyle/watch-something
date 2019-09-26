import React from 'react';

class Poster extends React.Component {
  state = {
    poster: '',
    error: false,
    load: false,
  }

  setPoster = () => {
    for(var i = 0; i < this.props.images.length; i++){
      if(this.props.images[i].type === "POSTER"){
       this.setState({
         poster: this.props.images[i].url
       })
      }
    }
  }

  setNewURL = () => {
    for(var i = 0; i < this.props.images.length; i++){
      if(this.props.images[i].type === "POSTER"){
        let url = this.props.images[i].url
        if(url[url.length-1] === "?"){
          this.setState({
            poster: url.substr(0, url.length-1),
          })
        }
      }
    }
  }

  handleError = () => {
    this.setState({
      error: true,
    })
    this.setNewURL()
  }

  handleLoad = () => {
    this.setState({
      load: true,
    })
  }

  componentDidMount = () => {
    this.setPoster()
  }

  render(){
    return(
      <img 
        src={this.state.poster}
        alt="Movie Poster" 
        onLoad={this.handleLoad}
        onError={this.handleError} 
      />
    )
  }
}
  
export default Poster;