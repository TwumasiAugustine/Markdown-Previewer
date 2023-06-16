import React from 'react';

const Footer = () => {
    const date = new Date();
    const fullYear = date.getFullYear()

    return (
        <footer className="footer">
            <p className="dev-info">
                &copy; ❤ <a className='dev_link' href="http://www.twumasiaugustine.com" target="_blank" rel="noopener noreferrer">dev_twumstine </a>
                {fullYear}
            </p>
        </footer>
    )
}

export default Footer;