import { useState } from 'react';

function FormTodo({ onTambah }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === '') {
      setError('Tugas tidak boleh kosong');
      return;
    }
    onTambah(input);
    setInput('');
    setError('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tambah tugas..."
      />
      <button type="submit">Tambah</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default FormTodo;
