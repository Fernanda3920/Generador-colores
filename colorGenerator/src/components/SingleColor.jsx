import React from 'react';

const SingleColor = ({ hexColor }) => {
  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color)
      .then(() => alert(`Copiaste el color ${color} en tu papelera!`))
      .catch(err => console.log('Fallo al copiar:', err));
  };

  return (
    <div
      className="single-card"
      style={{ backgroundColor: `#${hexColor}` }}
      onClick={() => copyToClipboard(`#${hexColor}`)}
    >
      <div className="content">
        <p>#{hexColor}</p>
      </div>
    </div>
  );
};

export default SingleColor;
