import React, { useState, useEffect } from 'react';

import data from 'assets/data/about.json';

export default function About() {
  const [img, setImg] = useState();

  useEffect(() => {
    async function getImg() {
      const imgData = await import(`assets/img/${data.img}`);
      setImg(imgData.default);
    }
    getImg();
  }, [img]);

  return (
    <main>
      <figure>
        <img src={img} alt={data.name} />
        <figcaption>
          <h3>{data.name}</h3>
          <p>{data.blurb}</p>
        </figcaption>
      </figure>
    </main>
  );
}
