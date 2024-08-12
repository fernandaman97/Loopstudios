import React from 'react';
import Target from './target';
function Main() {
  return (
    <main style={styles.main}>
        <div>
            <h2>OUR CREATIONS</h2>
            <button>SEE ALL</button>
        </div>
        <div>
            <Target/>
            <Target/>
            <Target/>
            <Target/>
            <Target/>
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
