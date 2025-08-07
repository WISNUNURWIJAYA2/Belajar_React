import { useState } from 'react';

function FormValidasi() {
  

  function handleSubmit(e) {
    e.preventDefault(); // mencegah reload
    if (!email.includes('@')) {
      setError('Email tidak valid');
    } else {
      setError('');
      alert(`Berhasil dikirim: ${email}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Kirim</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default FormValidasi;
