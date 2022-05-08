import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
         <footer className='text-center  text-white bg-dark p-2 '>
                <p>Copyright @ {currentYear}</p>
            </footer>
    );
};

export default Footer;