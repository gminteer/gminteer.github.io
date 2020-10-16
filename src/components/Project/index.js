import React, { useState, useEffect } from 'react';

function Project({ project }) {
  const [img, setImg] = useState();
  useEffect(() => {
    async function getImg() {
      console.log(project.img);
      const loadedImg = await import(`assets/img/${project.img}`);
      setImg(loadedImg.default);
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

export default Project;
