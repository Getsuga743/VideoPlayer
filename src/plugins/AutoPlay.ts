import MediaPlayer from '../MediaPlayer'
export default class AutoPlay {
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.mute()
        }
        setTimeout(() => { player.play() }, 3000)
    }
}