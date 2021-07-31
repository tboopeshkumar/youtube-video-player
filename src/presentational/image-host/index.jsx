import React from 'react';

export const ImageHost = ({src}) => {
    return (
        <div className="shadow border-2 border-red-300">
            <img src={src} alt="funny gif" />
        </div>
    )
}