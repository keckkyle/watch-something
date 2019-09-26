import React from 'react'
import Row from '../component/row'

const Home = (props) => (
  <div className='home'>
    {props.categories.map(category =>
    <div key={category.row_id}>
      <Row row={category}></Row>
    </div>
    )}
  </div>
)

export default Home