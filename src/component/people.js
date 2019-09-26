import React from 'react';

const People = (props) => {
  let cast = ''
  let director = ''
  for(var i = 0; i < props.people.length; i++){
    if(props.people[i].role === "CAST"){
      cast += `${props.people[i].name}, `
    } else if (props.people[i].role === "DIRECTOR"){
      director += `${props.people[i].name}, `
    }
  }
  cast = cast.substr(0, cast.length-2)
  director = director.substr(0, director.length-2)

  return(
    <>
    <p>Cast: {cast}</p>
    <p>Director: {director}</p>
    </>
  )
}
  
export default People;