import React from 'react'
import Row from '../component/row'

const Home = (props) => (
  <>
    {props.categories.map(category =>
    <div key={category.row_id}>
      <Row row={category}></Row>
    </div>
    )}
  </>
)

export default Home