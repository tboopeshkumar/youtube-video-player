import React from 'react';
import { Link } from 'react-router-dom';
import { ImageHost } from '../../presentational/image-host';
import sampleGif from '../../assets/funnygif.gif';

export const ImageContainer = () => {      
    const imageSrc = sampleGif;
    return(
        <div className="flex flex-col items-center justify-center w-full">
            <nav className="flex">
                <Link to="/video"
                    className="h-6 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 focus:shadow-outline hover:bg-blue-700">
                    Video
                </Link>               
            </nav>
            <ImageHost src={imageSrc}/>            
        </div>
    )
}