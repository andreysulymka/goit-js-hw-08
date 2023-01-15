import Player from '@vimeo/player';

console.log(123);
player.on("timeupdate", function (data) {
    const time = data.seconds;
    console.log(time);
    localStorage.setItem("videoplayer-current-time", time)
});


// player.setCurrentTime(time).then(function(seconds) {
 
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });
