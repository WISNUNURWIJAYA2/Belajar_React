import { useState } from 'react';

function FormNama() {
  const [nama, setNama] = useState('');

  return (
    <div>
      <h3>Form Nama</h3>
      <input
        type="text"
        placeholder="Ketik nama kamu"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <p>Halo, {nama || '...'}!</p>
    </div>
  );
}

export default FormNama;
