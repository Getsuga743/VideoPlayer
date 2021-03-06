import MediaPlayer from './src/MediaPlayer';
import AutoPlay from './src/plugins/AutoPlay';
import AutoPause from './src/plugins/AutoPause';

const video: HTMLElement = document.querySelector('video');
const progress: HTMLElement = document.querySelector("#progress")
const buttonPlay: HTMLButtonElement = document.querySelector('#playButton');
const buttonMute: HTMLButtonElement = document.querySelector('#muteButton')
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
    let videoDuration = player.duration()
    console.log(videoDuration)
    if (!player.isPaused()) {
        videoTimeUpdate = setInterval(() => {
            let timeUpdate = player.time();
            progress.value = (timeUpdate / (videoDuration / 100))
        }, 2000);
    }

}
video.onpause = () => {
    clearInterval(videoTimeUpdate);
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => console.log(err))
    console.log('serviceWorker ON')
}