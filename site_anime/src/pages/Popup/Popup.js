import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './popup.css';

const Popup = ({ title, message, title_button }) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={togglePopup}>{title_button}</button>
            {isOpen && (
                <div className="popup">
                    <div className="popup-inner">
                        <h2>{title}</h2>
                        <p>{message}</p>
                        <button onClick={togglePopup}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

Popup.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    title_button: PropTypes.string.isRequired,

};

export default Popup;