import React from 'react'
import Row from '../component/row'
import ScrollableSection from 'react-update-url-on-scroll';


const Home = (props) => (
  <div className='home'>
    {props.categories.map((category, i) =>
      <div key={category.row_id}>
        <ScrollableSection name={`page=${i}`}>
          <div>
            <Row row={category}></Row>
          </div>
        </ScrollableSection>
      </div>
    )}
  </div>
)

export default Home