export const getVideoIdFromLink = (videoLink) => {
    try {
        if(!videoLink)
            return '';
        const videoUrl = new URL(videoLink);
        const videoId = new URLSearchParams(videoUrl.search).get("v");
        return videoId;
    } catch(err) {
        console.error(err);
        return '';
    }
} 

export const isValidYoutubeUrl = (urlToParse) => {
    if (urlToParse) {
        var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if (urlToParse.match(regExp)) {
            return true;
        }
    }
    return false;
}