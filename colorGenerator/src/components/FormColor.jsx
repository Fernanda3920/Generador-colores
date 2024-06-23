import React, { useState } from "react";
import Values from 'values.js';

const FormColor = ({ setList }) => {
  const [color, setColor] = useState("blue");
  const [error, setError] = useState(false);

  const handleGenerator = (e) => {
    e.preventDefault();
    try {
      let colorPalette = new Values(color);
      let colors = colorPalette.all(3);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="form-color">
      <h1>Generador de paleta de colores</h1>
      <form onSubmit={handleGenerator}>
        <input
          type="text"
          placeholder="Escribe un color (ej. blue, red)"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input type="submit" value="Generar" />
      </form>
      {error && <p className="error">No existe el color ingresado.</p>}
    </div>
  );
};

export default FormColor;
