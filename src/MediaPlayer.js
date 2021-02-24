export default class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this._initPlugins()
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    isPaused() {
        return this.media.paused;
    }
    tooglePlay() {
        let status = this.isPaused();
        try {
            if (status) {
                return this.play()
            }
            return this.pause()
        } catch (err) {
            console.log(err)
        }
    }
}