import { useState, useEffect } from 'react';
import Modal from './components/Player/Modal';
import Player from './components/Player/Player';
import confetti from "canvas-confetti";

function App() {
  const [songs] = useState([
    {
      title: "For You",
      artist: "Đức Đuđu",
      img_src: "./images/ngocanh3.jpg",
      src: "./music/Đôi Lời.m4a"
    },
    {
      title: "BIRTHDAY",
      artist: "Anne Marie`",
      img_src: "./images/ngocanh23.jpg",
      src: "./music/Birthday - Anne-Marie.mp3"
    },
    {
      title: "Twenty-three(스물셋)",
      artist: "IU(아이유)",
      img_src: "./images/ngocanh4.jpg",
      src: "./music/Twenty-Three - IU.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [isModal, setIsModal] = useState(true);

  var count = 200;
  var defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  const handleFireWork = () => {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  
  }

  /*eslint-disable */
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  /*eslint-enable */

  return (
    <div className="App">
      {isModal && <Modal handleFireWork={handleFireWork} setIsModal={setIsModal} />}
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
        isPlay={!isModal}
      />
    </div>
  );
}

export default App;
