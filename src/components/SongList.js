import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
//no need to import reducers in here

class SongList extends Component {
  renderList () {
      return this.props.songList.map((song) => {
        return (
          <div className="item" key={song.title}>
            <div className="right floated content">
              <button 
                className="ui button primary"
                onClick={() => this.props.selectSong(song)}
              >
                Select
              </button>
            </div>
            <div className="content">{song.title}</div>
          </div>  
        );
      });
  }  
  render() {
    // selectSong action is being passed as a prop to the render method
    return (
      // this.props === { songList: state.songsRedu }  
      <div className="ui divided list">
        {this.renderList()}
      </div>
    )
  }
}

// function mapStateToProps() {} - alternative way to define
// the mapStateToProps
const mapStateToProps = state => {
    console.log(state);
    return { songList: state.songsRedu };
}

export default connect(mapStateToProps, { selectSong })(SongList);
