import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { YouTubeVideoPlayer } from '../../presentational/youtube-video-player';
import { videoLinkState, videoStartTimeState } from '../../store/videoInfoAtoms';

export const VideoPlayerContainer = () => {   
    const videoLink = useRecoilValue(videoLinkState);
    const videoStartTime = useRecoilValue(videoStartTimeState);
    const [, setvideoStartTime] = useRecoilState(videoStartTimeState);       
    const youTubePlayerRef = useRef();
    useLayoutEffect(() => {
        return () => {                      
            const currentTime = youTubePlayerRef.current?.getCurrentTime();
            if(currentTime) {
                setvideoStartTime(currentTime);
            }
        }
    });
    
    return(
        <div className="flex flex-col content-center items-center justify-center w-full">
            <nav className="flex">
                <Link to="/home"
                    className="h-6 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 focus:shadow-outline hover:bg-blue-700">
                    Home
                </Link>
                <Link to="/image"
                    className="h-6 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 focus:shadow-outline hover:bg-blue-700">
                GIF</Link>
            </nav>
            <YouTubeVideoPlayer ref={youTubePlayerRef} videoLink={videoLink} startTime={videoStartTime}/>            
        </div>
    )
}