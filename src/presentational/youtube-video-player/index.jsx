import React, { useImperativeHandle } from 'react';
import YouTube from 'react-youtube';
import { getVideoIdFromLink } from '../../utils/youtubeLinkUtil';
export const YouTubeVideoPlayer = React.forwardRef((props, ref) => {
    const {videoLink, startTime} = props;
    let youTubePlayer = null;
    console.log('start time', startTime);
    const opts = {
        playerVars: {
            autoplay: 1,
            start: Math.ceil(startTime) ?? 0
        }
    }
    const handleOnVideoReady = (event) => {
        youTubePlayer = event.target;       
        event.target.playVideo();
    }
    useImperativeHandle(ref, () => ({
        getCurrentTime: () => {            
            return  youTubePlayer?.getCurrentTime();
        }
    }));
    
    const videoId = getVideoIdFromLink(videoLink);   
    return(
        <div className="shadow border-2 border-red-300">
            <YouTube videoId={videoId} opts={opts}  onReady={handleOnVideoReady}/>
        </div>
        
    )
});