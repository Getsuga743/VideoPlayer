export default class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this._initPlugins();
    }
    _initPlugins() {
        const player = {
            media: this.media,
            play: () => this.play(),
            pause: () => this.pause(),
            get muted() {
                return this.media.muted
            },
            set muted(value) {
                this.media.muted = value;
            },
        }
        this.plugins.forEach(plugin => {
            return plugin.run(this);
        })
    }
    play() {
        this.media.play();
        this.media.classList.remove('paused');
    }
    pause() {
        this.media.pause();
        this.media.classList.add('paused');
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
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toogleMute() {
        if (this.media.muted) {
            this.media.muted = false;
        } else {
            this.media.muted = true;
        }
    }
    time() {
        return this.media.currentTime
    }
    duration() {
        return this.media.duration
    }
}