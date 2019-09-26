import React from 'react';

const Poster = (props) => {
  let poster = ''
  for(var i = 0; i < props.images.length; i++){
    if(props.images[i].type === "POSTER"){
      let url = props.images[i].url
      if(url[url.length-1] === "?"){
        poster = url.substr(0, url.length-1)
      }
    }
  }

  return(
      <img src={poster} alt="Movie Poster"></img>
  )
}
  
export default Poster;