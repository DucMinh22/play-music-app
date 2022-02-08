import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListSong = (props) => {
    return (
        <div className="tr--list-song">
            <div className="content">
                <div className="curent-song">
                    <div className="song">
                        <div className="text">Bài hát</div>
                        {props.song.title}
                    </div>
                    <div className="song">
                        <div className="text">Album</div>
                        Valentine's Day
                    </div>
                    <div className="song">
                        <div className="text">Nghệ sĩ</div>
                        {props.song.artist}
                    </div>
                </div>
                <div className="suggest-songs" style={{ marginTop: '30px' }}>
                    <p>Danh sách bài hát</p>
                    {props.songs.map((song, index) => (
                        <div className={`${props.isPlaying && props.song.title === song.title ? 'active' : ''} details-content `} key={index}>
                            <div className="img-play">
                                <img src={song.img_src} alt="ava-artist" />
                                <button className="play-btn" onClick={() => {
                                    if(props.song.title === song.title) {
                                        props.setIsPlaying(!props.isPlaying);
                                    } else {
                                        props.setIsPlaying(true);
                                    }
                                    props.setCurrentSongIndex(index);
                                }}>
                                    <FontAwesomeIcon icon={props.isPlaying && props.song.title === song.title ? faPause : faPlay} />
                                </button>
                            </div>
                            <div className="name-song">
                                <p>{song.title}</p>
                                <p className="singer">{song.artist}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListSong;