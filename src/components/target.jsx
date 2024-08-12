import React from 'react';
function Target({imageSrc, text}) {
  return (
    <main>
        <div className='target'>
            <p className='description-image'>{text}</p>
            <img src={imageSrc} alt="Image" />
        </div>
    </main>
  );
}


export default Target;
