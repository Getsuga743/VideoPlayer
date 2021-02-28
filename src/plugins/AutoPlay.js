export default class AutoPlay {
    run(player) {
        console.log(player.muted)
        if (!player.muted) {
            player.mute()
        }
        setTimeout(() => { player.play() }, 3000)
    }
}