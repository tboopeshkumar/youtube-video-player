import { atom } from "recoil";
export const videoLinkState = atom({
    key: 'videoLinkState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

export const videoStartTimeState = atom({
    key: 'videoStartTimeState', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});