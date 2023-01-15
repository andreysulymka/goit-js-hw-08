import Player from '@vimeo/player';

// const iframe = document.querySelector('iframe');

// iframe.on('timeupdate', onPlay);
// const onPlay = function (data) {
   
// };
// const dataJson = JSON.stringify(data);
// localStorage.setItem("videoplayer-current-time", dataJson);
// const time = +localStorage.getItem(VIDEO_CURRENT_TIME);
//  player.setCurrentTime(time);
player.on("timeupdate", throttle(function (data) {
     const time = data.seconds;
     console.log(time);
    localStorage.setItem(TIME_DATA_PLAYER, time)
},1000))
