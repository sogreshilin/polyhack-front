import React from 'react'

const VideoPlayer = (props) => {
    return (
        <div class="plyr__video-embed" id="player">
                <iframe
                    src={`https://www.youtube.com/embed/${props.videoId}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;start=${props.start}&amp;autoplay=${props.isAutoplay}`}
                    allowfullscreen
                    allowtransparency
                    allow="autoplay"
                ></iframe>
        </div>
    )
}

export default VideoPlayer;
