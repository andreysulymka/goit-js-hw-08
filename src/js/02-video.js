import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');
const player= new Player(iframe);



player.on("timeupdate", throttle(function (data) {
    const time = data.seconds;
    console.log(time);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(time))
}, 1000));

 
const timeFromStorage = localStorage.getItem("videoplayer-current-time");
const parcedtimeFromStorage = JSON.parse(timeFromStorage);

player.setCurrentTime(parcedtimeFromStorage).then(function(seconds) {
   
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
        
            break;

        default:
        
            break;
    }
});
