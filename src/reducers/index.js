import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'A', duration: '4:00' },
        { title: 'B', duration: '5:00' },
        { title: 'C', duration: '2:00' },
        { title: 'D', duration: '10:00' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    } 

    return selectedSong;
}

export default combineReducers ({
    songsRedu: songsReducer,
    currentSongReducer: selectedSongReducer
});