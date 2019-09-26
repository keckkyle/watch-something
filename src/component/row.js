import React from 'react'
import {default as Hscroll} from './horizontalScroll'

const Row = (props) => (
  <div className='movie-category'>
    <h2 className='category-title'>{props.row.row_name}</h2>
    <Hscroll movies={props.row.data}></Hscroll>
  </div>
)

export default Row