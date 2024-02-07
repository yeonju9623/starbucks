 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
//  onYouTubeIframeAPIReady() <- 함수 변경 X 라이브러리에서 사용하는 거라
 function onYouTubeIframeAPIReady() {
  // 'player': <div id="player"></div>
  new YT.Player('player', {
    // 최초 재생할 유튜브 영상 ID (https://www.youtube.com/watch?v= 뒷 내용)
    videoId: '0TAAUWHo4Ec',
    // 영상을 재생하기 위한 여러 변수들
    playerVars: {
      autoplay: true,
      loop: true,
      // loop: true로 할 경우 반복 재생할 id를 문자로 할당해줘야 함
      playlist: '0TAAUWHo4Ec'
    },
    events: {
      // 유튜브 영상이 준비가 되면 (onReady), 다음의 함수가 실행이 됨
      onReady: function (event) {
        event.target.mute() // 유튜브 재생 영상 음소거 기능
      }
    }
  });
 }