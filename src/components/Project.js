import React, { useState, useEffect } from 'react';

export default function Project({ project }) {
  const [img, setImg] = useState();

  useEffect(() => {
    async function getImg() {
      const imgData = await import(`assets/img/${project.img}`);
      setImg(imgData.default);
    }
    getImg();
  }, [project.img, img]);

  return (
    <div>
      <figure>
        <figcaption>
          <h3>{project.name}</h3>
          <p>{project.tag}</p>
        </figcaption>
        <img src={img} alt={`${project.name} in action`} />
      </figure>
    </div>
  );
}
