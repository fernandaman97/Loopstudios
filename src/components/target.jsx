import React from 'react';
function Footer() {
  return (
    <main style={styles.main}>
        <div>
            <img style={styles.img} src="/images/jpg/image-grid.jpg" alt="Image" />
            <button>nose</button>
        </div>
        <div>
            
        </div>
    </main>
  );
}

const styles = {
  main: {
    color: 'black',
  },
  img:{
    width: '10rem',
    height: '20rem',
    objectFit: 'cover',
    margin: '1rem',
  }
};

export default Footer;
