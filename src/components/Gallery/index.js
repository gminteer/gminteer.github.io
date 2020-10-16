import React from 'react';

import lyricLookup from 'assets/img/lyric-look-up.jpg';

function Gallery(props) {
  return (
    <div>
      <img src={lyricLookup} alt="Lyric Look-up in action"></img>
    </div>
  );
}

export default Gallery;
