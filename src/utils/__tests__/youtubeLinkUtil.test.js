import { getVideoIdFromLink, isValidYoutubeUrl } from '../youtubeLinkUtil';

test('validate video link', () => {
    const url = 'https://www.youtube.com/watch?v=3e1GHCA3GP0';
    const validUrlTest = isValidYoutubeUrl(url);
    expect(validUrlTest).toBe(true);
    const inValidUrlTest = isValidYoutubeUrl('testabcd');
    expect(inValidUrlTest).toBe(false);
 });

 test('get video id', () => {
   const url = 'https://www.youtube.com/watch?v=3e1GHCA3GP0';
   const id = getVideoIdFromLink(url);
   expect(id).toBe('3e1GHCA3GP0');
});

   
  