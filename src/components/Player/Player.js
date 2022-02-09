import React, { useState, useRef, useEffect } from 'react'
import Controls from './Controls';
import Details from './Details';
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import ListSong from './ListSong';
import Lyric from './Lyric';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [favoriteSong, setFavoriteSong] = useState(false);
    const slideRef = useRef();

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    useEffect(() => {
        setIsPlaying(props.isPlay);
    }, [props.isPlay]);

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;
                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;
                if (temp < 0) {
                    temp = props.songs.length - 1;
                }
                return temp;
            });
        }
    }

    const goto = () => {
        slideRef.current.goTo(parseInt(2, 10));
    }

    const addFavoriteSong = () => {

    }

    const properties = {
        duration: 10,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
        arrows: false
    };

    return (
        <div className="c-player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Play</h4>
            <Slide ref={slideRef} {...properties}>
                <div>
                    <Details song={props.songs[props.currentSongIndex]} isPlaying={isPlaying} />
                </div>
                <div>
                    <ListSong isPlaying={isPlaying} setIsPlaying={setIsPlaying} setCurrentSongIndex={props.setCurrentSongIndex} song={props.songs[props.currentSongIndex]} songs={props.songs} />
                </div>
                <div>
                    <Lyric song={props.songs[props.currentSongIndex]} />
                </div>
            </Slide>
            <Controls isPlaying={isPlaying} favoriteSong={favoriteSong} setFavoriteSong={setFavoriteSong} addFavoriteSong={addFavoriteSong} setIsPlaying={setIsPlaying} goto={goto} SkipSong={SkipSong} />
            <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
        </div>
    )
}

export default Player;
