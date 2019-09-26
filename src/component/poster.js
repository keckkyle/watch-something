import React from 'react';

// const Poster = (props) => {
//   let poster = ''
//   for(var i = 0; i < props.images.length; i++){
//     if(props.images[i].type === "POSTER"){
//       poster = props.images[i].url
//       // let url = props.images[i].url
//       // if(url[url.length-1] === "?"){
//       //   poster = url.substr(0, url.length-1)
//       // }
//     }
//   }

//   return(
//       <img src={poster} alt="Movie Poster"/>
//   )
// }


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