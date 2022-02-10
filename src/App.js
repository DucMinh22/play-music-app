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
      heart: false,
      src: "./music/Đôi Lời.m4a",
      lyric: "Từ một phút tình cờ anh biết rằng mình mong nhớ Và từ một phút tình cờ anh thấy nhẹ nhàng bất ngờ  Ta đã từng đi đến tận cùng thế giới tìm một ai đó  Cho đến phút giây ta vô tình biết bằng ta tìm thấy nhau  Chẳng cần quá vội vàng tìm kiếm nhiều điều xa xôi  Vì tình yêu đến nhẹ nhàng như chính nụ cười em rồi  Chẳng cần biết đường dài phía trước còn nhiều tăm tối  Anh sẽ hát lên bao câu tình ca vì yêu em thế thôi  Thật lòng anh muốn và rất muốn nhẹ nhàng giữ em cho riêng mình  Để nỗi nhớ vu vơ sẽ không còn là cơn mơ  Thật lòng anh muốn và luôn muốn là người nắm tay em suốt đời  Vì đã trót yêu thương có ai nào muốn xa rời  Vì đã trót yêu thương trái tim chẳng tiếc đôi lời Uhm uhm uhm uhm"
    },
    {
      title: "Thay mọi cô gái yêu anh",
      artist: "Amee`",
      img_src: "./images/IMG_4071.PNG",
      heart: false,
      src: "./music/Thay Moi Co Gai Yeu Anh - AMee.mp3",
      lyric: "Tình đầu đẹp như mơ Tình đầu đẹp như thơ Tình đầu, ôi ngày xưa ấy sao ngây ngô Chạm mặt lúc học thêm Anh ngại ngùng đến tìm em Tặng em lời giải toán thay lời tỏ tình Nhẹ nhàng mình bên nhau Nhẹ nhàng cầm tay nhau Nhẹ nhàng Cùng nhau đi qua thời niên thiếu Giờ đây có chàng trai Ở bên cạnh một cô gái Tặng nhau thanh xuân đẹp nhất của cả hai Baby ah, you are my favourite Giống như lá rơi khi thu về Lấp lánh hơn Muôn ngàn vì sao từng được thấy Như cà phê sáng sớm Như ánh nắng chiếu qua áng mây Baby ah, you are my favourite Như soái ca bước ra từ truyện tranh Như giấc mơ Tất cả nàng thơ đều yêu thích Thay mặt mọi cô gái trên thế giới Em yêu anh"
    },
    {
      title: "It's you",
      artist: "Sezairi",
      img_src: "./images/IMG_3953.PNG",
      heart: false,
      src: "./music/It_s You - Sezairi.mp3",
      lyric: "It's you It's always you If I'm ever gonna fall in love  I know it's gon' be you  It's you  It's always you  Met a lot of people  But nobody feels like you  So please don't break my heart  Don't tear me apart  I know how it starts  Trust me I've been broken before  Don't break me again  I am delicate  Please don't break my heart Trust me I've been broken before  I've been broken, yeah I know how it feels  To be open  And then find out your love isn't real  I'm still hurting, yeah I'm hurting inside  I'm so scared to fall in love  But if it's you then I'll try  It's you  It's always you  If I'm ever gonna fall in love I know it's gon' be you  It's you  It's always you  Met a lot of people  But nobody feels like you So please, don't break my heart  Don't tear me apart  I know how it starts  Trust me I've been broken before  Don't break me again  I am delicate  Please, don't break my heart  Trust me I've been broken before  No, I'm not the best at choosing lovers  We both know my past speaks for itself  If you don't think that we're right for each other  Then please don't let history repeat itself  'Cause I want youI want you There's nothing else I want  'Cause I want you  I want you  And you're the only thing I want  It's you  It's always you  If I'm ever gonna fall in love  I know it's gon' be you  It's you  It's always you  Met a lot of people  But nobody feels like you  So please, don't break my heart  Don't tear me apart I know how it starts  Trust me I've been broken before  Don't break me again  I am delicate  Please don't break my heart  Trust me I've been broken before"
    },
    {
      title: "Em ơi",
      artist: "Vũ Cát Tường",
      img_src: "./images/IMG_4072.PNG",
      heart: false,
      src: "./music/EmOi-VuCatTuong-4767367.mp3",
      lyric: "Em ơi mình đã yêu nhau được mấy tháng rồi  Em ơi mình đã qua bao nhiêu sóng gió trên đời  Có mấy đêm anh thức khuya đọc những lá thư em trao đến anh  Em ơi mình đã xa nhau hơn cả tuần rồi  Đây là Valentine đầu tiên anh và em có nhau yêu nhau  Sao em không ở đây bên anh lúc này  Đây cà phê nhớ em  Đây hàng me nhớ em  Đây Đông Du nhớ em bên anh mỗi khi tan ca  Anh mong sao ngày chóng qua Em ơi một ngày em nói yêu anh bao nhiêu lần  Em ơi một tuần gặp nhau bao nhiêu là vừa  Có lúc ta hay giận hờn vu vơ  Anh chẳng nói còn em lặng im  Em ơi mình đã hiểu nhau đến bao nhiêu rồi (oh)  Đây là Valentine đầu tiên anh và em có nhau yêu nhau (ha)  Sao em không ở đây bên anh ngay lúc này  Đây Sài Gòn nhớ em (ha)  Đây mình anh lái xe vòng vòng  Đây hoàng hôn ghé thăm nơi góc phố riêng đôi ta  Anh mong sao ngày chóng qua  (Anh mong sao ngày chóng qua  Em mong sao ngày chóng qua ah)  Em ơi dù mai sau dù có gió mưa xô nghiêng vào đầu  Em ơi em nhớ nắm tay anh qua thương đau  Em ơi lòng này yêu em  Chỉ có hàng me mới hiểu lòng anh  Em ơi hãy đừng hoài nghi vì trái tim anh ngu si  Anh mong mình luôn có đôi  Anh mong mình luôn có đôi  Anh mong mình luôn có đôi"
    },
    {
      title: "Yêu em rất nhiều",
      artist: "Anne Marie`",
      img_src: "./images/IMG_4073.JPG",
      heart: false,
      src: "./music/YeuEmRatNhieu-HoangTon-7031755.mp3",
      lyric: "Ngồi giữa bóng đêm anh chưa thể ngủ được  Vì nỗi nhớ em vu vơ bất thường  Cảm giác đắm say cứ thế đong đầy trong nơi trái tim  Là thứ bấy lâu nay anh đã kiếm tìm.  Những câu chuyện thật dài mỗi tối  Những phút giây ngập ngừng bối rối Tiếng em cười và lời em nói  Khiến anh giờ đang như quên mất lối.  Những khi chạm nhìn vào đôi mắt  Anh chỉ muốn ôm em thật chặt  Để anh nói em nghe, nói em nghe lòng anh.  Người ơi, em có biết anh đã yêu em rất nhiều  Chẳng cần những lý lẽ để nói nên câu tình yêu Làm như không quan tâm nhưng anh thực sự nhớ em  Muốn được chở che cho em những đêm lạnh về  Anh muốn nói yêu em rất nhiều.  Những câu chuyện thật dài mỗi tối  Những phút giây ngập ngừng bối rối  Tiếng em cười và lời em nói Khiến anh giờ đang như quên mất lối.  Từ khi đã trót lỡ yêu rồi  Anh chỉ mong gần em mãi thôi  Để anh hôn nhẹ lên, hôn nhẹ lên bờ môi.  Người ơi, em có biết anh đã yêu em rất nhiều  Chẳng cần những lý lẽ để nói nên câu tình yêu  Làm như không quan tâm nhưng anh thực sự nhớ em  Muốn được chở che cho em những đêm lạnh về  Anh muốn nói yêu em rất nhiều.  Và anh muốn hát cho em bài hát trong tâm hồn anh Thật mạnh mẽ nhưng sao nhiều lúc cô đơn mỏng manh  Chuyện tình yêu chẳng thể nói trước điều gì  Nhưng thôi ta mặc kệ cứ yêu đi  Nguyện bên em trên con đường dài, thủy chung mãi mãi.  Người ơi, em có biết anh đã yêu em rất nhiều Chẳng cần những lý lẽ để nói nên câu tình yêu  Làm như không quan tâm nhưng anh thực sự nhớ em (anh rất nhớ em)  Muốn được chở che cho em những đêm lạnh về  Anh muốn nói yêu em rất nhiều.  Muốn được chở che cho em những đêm lạnh về  Anh muốn nói... Anh muốn nói... Anh yêu em..."
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
