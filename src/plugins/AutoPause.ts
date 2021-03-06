import MediaPlayer from '../MediaPlayer';

export default class AutoPause {
    private threshold: number;
    player: MediaPlayer;
    constructor() {
        this.threshold = 0.25
        this.handleInterseaction = this.handleInterseaction.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run(player:MediaPlayer) {
        this.player = player
        const observer = new IntersectionObserver(this.handleInterseaction, {
            threshold: this.threshold
        })
        observer.observe(this.player.media)
        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }
    private handleInterseaction(entries: IntersectionObserverEntry[]) {
        //este this esta siendo llamado por el interseaction observer, por eso da undefinied
        const entry = entries[0]
        const isVisible = entry.intersectionRatio >= this.threshold
        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }

    }
    private handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible"
        if (isVisible) {
            console.log('visible')
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}