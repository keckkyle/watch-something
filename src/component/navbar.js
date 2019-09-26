import React from 'react'
import {Link} from 'react-router-dom'
import {ScrollableLink} from 'react-update-url-on-scroll';


class NavBar extends React.Component {
  state = {
  }


  render(){
    return(
      <>
      <nav>
        <div className="title">
          <Link to='/'>
            <h1>Watch Something</h1>
            <small>hooq database viewer</small>
          </Link>
        </div>
        {this.props.moviePage ? 
          <Link to='/'>Back</Link>
        :
          <div className='links-toggle' onClick={this.props.toggleLinks}>Categories</div>
        }
      </nav>
      <ul 
        className={this.props.linksOpen ? 
          'nav-links' 
        : 
          'nav-links hidden'}
        >
      {this.props.categories.map((category, i) =>
        <li onClick={this.props.toggleLinks} key={category.row_id}>
          <ScrollableLink href={`/page=${i}`}>
            <p className='link'>{category.row_name}</p>
          </ScrollableLink>
        </li>
      )}
      </ul>
      </>
    )
  }
}



export default NavBar