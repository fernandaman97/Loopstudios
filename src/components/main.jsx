import React from 'react';
import Target from './target';
function Main() {
  return (
    <main style={styles.main}>
        <div className='creations'>
            <h2>OUR CREATIONS</h2>
            <button>SEE ALL</button>
        </div>
        <div className='targets'>
            <Target imageSrc="/images/jpg/image-deep-earth.jpg" text="DEEP EARTH"/>
            <Target imageSrc="/images/jpg/image-night-arcade.jpg" text="NIGHT ARCADE"/>
            <Target imageSrc="/images/jpg/image-soccer-team.jpg" text="SOCCER TEAM VR"/>
            <Target imageSrc="/images/jpg/image-grid.jpg" text="THE GRID"/>
            <Target imageSrc="/images/jpg/image-from-above.jpg" text="FROM UP ABOVE VR"/>
            <Target imageSrc="/images/jpg/image-pocket-borealis.jpg" text="POCKET BOREALIS"/>
            <Target imageSrc="/images/jpg/image-curiosity.jpg" text="THE CURIOSITY"/>
            <Target imageSrc="/images/jpg/image-fisheye.jpg" text="MAKE IT FISHEYE"/>
        </div>
    </main>
  );
}

const styles = {
  main: {
    color: 'black',
  },
  text: {
    margin: 0,
  },
};

export default Main;
