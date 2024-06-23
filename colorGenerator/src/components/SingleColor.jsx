import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faCheck } from '@fortawesome/free-solid-svg-icons';

const SingleColor = ({ hexColor }) => {
  const [copied, setCopied] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color)
      .then(() => {
        setCopied(true);
        setShowMessage(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000); 
        setTimeout(() => {
          setShowMessage(false);
        }, 1000); 
      })
      .catch(err => console.log('Fallo al copiar:', err));
  };

  return (
    <div
      className="single-card position-relative"
      style={{ backgroundColor: `#${hexColor}`, padding: '20px', borderRadius: '5px', cursor: 'pointer' }}
      onClick={() => copyToClipboard(`#${hexColor}`)}
    >
      <div className="content d-flex justify-content-between align-items-center">
        <p className="m-0">#{hexColor}</p>
        <FontAwesomeIcon icon={copied ? faCheck : faClipboard} />
      </div>
      {showMessage && (
        <div className="toast align-items-center text-white bg-success border-0 position-absolute bottom-0 start-50 translate-middle-x mt-2">
          <div className="d-flex">
            <div className="toast-body">
              ¡Has copiado el código!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleColor;
