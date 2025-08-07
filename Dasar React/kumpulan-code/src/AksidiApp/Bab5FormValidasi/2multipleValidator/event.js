// FormLengkap.js
import { useState } from 'react';

function FormLengkap() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newError = {};
    if (!formData.nama.trim()) newError.nama = 'Nama wajib diisi';
    if (!formData.email.includes('@')) newError.email = 'Email tidak valid';
    if (formData.password.length < 6) newError.password = 'Password minimal 6 karakter';

    if (Object.keys(newError).length > 0) {
      setError(newError);
    } else {
      setError({});
      alert('Data berhasil dikirim:\n' + JSON.stringify(formData, null, 2));
      setFormData({ nama: '', email: '', password: '' }); // reset form
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nama:</label><br />
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
        />
        {error.nama && <p style={{ color: 'red' }}>{error.nama}</p>}
      </div>

      <div>
        <label>Email:</label><br />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
      </div>

      <div>
        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
      </div>

      <button type="submit">Kirim</button>
    </form>
  );
}

export default FormLengkap;
