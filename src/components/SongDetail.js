import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ sooong }) => {
  if(!sooong) {
    return <div>Select a song</div>;
  }  
  return (
    <div>
      <h3>Details for:</h3>  
      <p>
      Title: {sooong.title}
      <br />
      Duration: {sooong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
   return { sooong: state.currentSongReducer }
};

export default connect(mapStateToProps)(SongDetail);
