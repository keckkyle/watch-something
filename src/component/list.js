import React from 'react';

const List = (props) => {
  let list = true
  if(props.listData === undefined || props.listData.length === 0){
    list = false
  } 

  return(
    <>
      {list && 
        <div className="list-group">
          <p className="list-group-title">{props.title}:</p>
          <ul className="list-input">
            {props.listData.map( (item, i) =>
              <li key={item + i}>
                {item}
              </li>
            )}
          </ul>
        </div>
      }
    </>
  )
}
  
export default List;