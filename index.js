import MediaPlayer from './src/MediaPlayer.js';
import AutoPlay from './src/plugins/AutoPlay.js';

const video = document.querySelector('video');
const button = document.querySelector('button');

const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay()]
})

button.onclick = () => {
    player.tooglePlay();
}