import { useState, useEffect } from 'react';

function ContohEffect() {
  const [jumlah, setJumlah] = useState(0);

  useEffect(() => {
    console.log(`Jumlah sekarang: ${jumlah}`);
  }, [jumlah]);

  return (
    <div>
      <p>Jumlah: {jumlah}</p>
      <button onClick={() => setJumlah(jumlah + 1)}>Tambah</button>
    </div>
  );
}

export default ContohEffect;