import React from 'react'
import {isMobile} from 'react-device-detect'
import {Link} from 'react-router-dom'
import Poster from '../component/poster'

class Movie extends React.Component {
    state = {
        overflow: false,
        hover: false,
    }

    title = React.createRef()

    checkOverflow = () => {
        if(this.title.current.offsetWidth < this.title.current.scrollWidth){
            return true
        }
        return false
    }

    componentDidMount = () => {
        this.setState({
            overflow: this.checkOverflow(),
        })
    }

    handleMouseEnter = () => {
        this.setState({
            hover: true,
        })
    }

    handleMouseLeave = () => {
        this.setState({
            hover: false,
        })
    }


    render(){
        return(
            <div className='movie-container'>
            <div 
              className="movie"
              onMouseOver={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <Link 
                to={`/movies/${this.props.id}`}
                image={this.state.poster}
              >
                <Poster images={this.props.images} />
              </Link>
                <p
                  ref={this.title}
                  className={ this.state.overflow ? 
                    isMobile ? 
                      'marquee'
                      :
                      this.state.hover ?
                        'marquee'
                        :
                        ''
                    : ''
                  }
                >{this.props.title}</p>
            </div>
            </div>
        )
    }
}

export default Movie