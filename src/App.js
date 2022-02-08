import { useState, useEffect } from 'react';
import Modal from './components/Player/Modal';
import Player from './components/Player/Player';
import confetti from "canvas-confetti";

function App() {
  const [songs] = useState([
    {
      title: "For You",
      artist: "Đức Đuđu",
      img_src: "./images/IMG_4057.PNG",
      src: "./music/Đôi Lời.m4a",
      lyric: "Tình đầu đẹp như mơ Tình đầu đẹp như thơ Tình đầu, ôi ngày xưa ấy sao ngây ngô Chạm mặt lúc học thêm Anh ngại ngùng đến tìm em Tặng em lời giải toán thay lời tỏ tình Nhẹ nhàng mình bên nhau Nhẹ nhàng cầm tay nhau Nhẹ nhàng Cùng nhau đi qua thời niên thiếu Giờ đây có chàng trai Ở bên cạnh một cô gái Tặng nhau thanh xuân đẹp nhất của cả hai Baby ah, you are my favourite Giống như lá rơi khi thu về Lấp lánh hơn Muôn ngàn vì sao từng được thấy Như cà phê sáng sớm Như ánh nắng chiếu qua áng mây Baby ah, you are my favourite Như soái ca bước ra từ truyện tranh Như giấc mơ Tất cả nàng thơ đều yêu thích Thay mặt mọi cô gái trên thế giới Em yêu anh"
    },
    {
      title: "BIRTHDAY",
      artist: "Anne Marie`",
      img_src: "./images/IMG_4073.JPG",
      src: "./music/Birthday - Anne-Marie.mp3",
      lyric: ""
    },
    {
      title: "Twenty-three(스물셋)",
      artist: "IU(아이유)",
      img_src: "./images/IMG_3953.PNG",
      src: "./music/Twenty-Three - IU.mp3",
      lyric: ""
    },
    {
      title: "For You",
      artist: "Đức Đuđu",
      img_src: "./images/IMG_4072.PNG",
      src: "./music/Đôi Lời.m4a",
      lyric: "Tình đầu đẹp như mơ Tình đầu đẹp như thơ Tình đầu, ôi ngày xưa ấy sao ngây ngô Chạm mặt lúc học thêm Anh ngại ngùng đến tìm em Tặng em lời giải toán thay lời tỏ tình Nhẹ nhàng mình bên nhau Nhẹ nhàng cầm tay nhau Nhẹ nhàng Cùng nhau đi qua thời niên thiếu Giờ đây có chàng trai Ở bên cạnh một cô gái Tặng nhau thanh xuân đẹp nhất của cả hai Baby ah, you are my favourite Giống như lá rơi khi thu về Lấp lánh hơn Muôn ngàn vì sao từng được thấy Như cà phê sáng sớm Như ánh nắng chiếu qua áng mây Baby ah, you are my favourite Như soái ca bước ra từ truyện tranh Như giấc mơ Tất cả nàng thơ đều yêu thích Thay mặt mọi cô gái trên thế giới Em yêu anh"
    },
    {
      title: "BIRTHDAY",
      artist: "Anne Marie`",
      img_src: "./images/IMG_4071.PNG",
      src: "./music/Birthday - Anne-Marie.mp3",
      lyric: ""
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
