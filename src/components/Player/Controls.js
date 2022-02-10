import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward, faMusic, faHeart } from '@fortawesome/free-solid-svg-icons'

function Controls(props) {
    const oldSong = localStorage.getItem('favorite');
    return (
        <div className="c-player--controls" style={{ paddingTop: '15px', marginTop: '10px', borderTop: '1px solid rgb(21 64 90)' }}>
            <button className='kara-button' onClick={() => props.goto()}>
                <FontAwesomeIcon icon={faMusic} />
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>
            <button className={`${props.favoriteSong ? 'favourite' : ''} heart-button`} onClick={() => {
                props.setFavoriteSong(!props.favoriteSong);
                if(oldSong && !oldSong.split(",").includes(props.song.title)) {
                    localStorage.setItem('favorite', [oldSong, props.song.title]);
                } else {
                    localStorage.setItem('favorite', props.song.title);
                }
            }}>
                <FontAwesomeIcon icon={faHeart} />
            </button>
        </div>
    )
}

export default Controls
