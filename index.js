import MediaPlayer from './src/MediaPlayer.js';
import AutoPlay from './src/plugins/AutoPlay.js';
import AutoPause from './src/plugins/AutoPause.js';
const video = document.querySelector('video');
const progress = document.querySelector("#progress")
const buttonPlay = document.querySelector('#playButton');
const buttonMute = document.querySelector('#muteButton')
const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause()]
})

buttonPlay.onclick = () => {
    player.tooglePlay();
}
buttonMute.onclick = () => {
    player.toogleMute();
}
video.onclick = (e) => {

    if (Array.from(e.target.classList).includes('paused')) {
        return player.tooglePlay();
    }
    return player.tooglePlay();
}
let videoTimeUpdate;
video.onplaying = (e) => {
    console.log('play')
    let videoDuration = player.duration()
    console.log(videoDuration)
    if (!player.isPaused()) {
        videoTimeUpdate = setInterval(() => {
            let timeUpdate = player.time();

            console.log(timeUpdate / (videoDuration / 100))
            progress.value = (timeUpdate / (videoDuration / 100))
        }, 2000);
    }

}
video.onpause = () => {
    clearInterval(videoTimeUpdate)
}