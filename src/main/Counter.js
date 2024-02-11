import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; 

function Counter({ datos }) {
  const [contador, setContador] = useState(0); 

  return (
    <div>
      <Button variant='primary' onClick={() => setContador(contador + 1)}>CLICK</Button>
      <h1>Contador: {contador}</h1>
      {datos.map((dato) => {
        return (
          <h1>{dato}</h1>
        );
      })}
    </div>
  );
}

export default Counter;