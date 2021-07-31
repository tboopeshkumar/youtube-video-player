import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import { videoLinkState, videoStartTimeState } from '../../store/videoInfoAtoms';
import { isValidYoutubeUrl } from '../../utils/youtubeLinkUtil';

export const Home = () => {
    const [, setVideoLink] = useRecoilState(videoLinkState);  
    const [, setVideoStartTime] = useRecoilState(videoStartTimeState);       
    const [videoLinkText, setVideoLinkText] = useState('');   
    const [isValidForm, setIsValidForm] = useState(true);   
    const history = useHistory() ;  
    const handleInputChange = (event) => {
        const val = event.target.value;
        if(!val)
            setIsValidForm(true);
        setVideoLinkText(event.target.value);
        
    }
    const handleVideoLinkSave = (event) => {
        setVideoStartTime(null);
        const isValidLink = isValidYoutubeUrl(videoLinkText);
        if(!isValidLink) {
            setIsValidForm(false);
            return;
        }
        setIsValidForm(true);
        setVideoLink(videoLinkText);       
        history.push("/video");
    }
    
    return (
        <div className="flex flex-col content-center justify-center w-full">
            <div className="flex content-center justify-center w-full">
                <input onChange={handleInputChange} value={videoLinkText} placeholder="Type / Paste YouTube Video link"
                    className="w-2/3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                <button 
                    onClick={handleVideoLinkSave}
                    className="border-2 hover:bg-red-500 hover:text-white border-red-500 px-4 py-2 ml-2 rounded">
                Play</button>             
             </div> 
             <div className="flex content-center justify-center w-full py-2 px-3" style={{visibility: isValidForm ? 'hidden' : 'visible' }}>
                <span class="text-xs text-red-700">Invalid YouTube video url</span>    
             </div>
        </div>
       
    )
}