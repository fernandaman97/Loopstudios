import React from 'react';
function Footer() {
  return (
    <footer>
        <div>
            <img src="/images/svg/logo.svg" alt="logo" />

            <a>About</a>
            <a>Careers</a>
            <a>Events</a>
            <a>Products</a>
            <a>Support</a>
        </div>

        <div>
            <div className='iconos'>
                <img src="/images/svg/icon-facebook.svg" alt="facebook" />
                <img src="/images/svg/icon-instagram.svg" alt="instagram" />
                <img src="/images/svg/icon-pinterest.svg" alt="pinterest" />
                <img src="/images/svg/icon-twitter.svg" alt="twitter" />
                </div>
            <p>2021|Loopstudios. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
