import React from 'react'

function VideoComponent() {
    return (
        <div>
             <div className="App">
            <header className="App-header">
            <video controls muted>
                <source src="https://video-streaming-backend.herokuapp.com/video" type="video/mp4"></source>
            </video>
            </header>
        </div>
        </div>
    )
}

export default VideoComponent
