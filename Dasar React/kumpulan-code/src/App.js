import { useState, useEffect } from 'react';

import Profill from './AksidiApp/Bab2/Profil-Utama';
import Feedback from './AksidiApp/Bab3Props&State/4Fedback/Feedback';
import InputState from './AksidiApp/Bab3Props&State/1inputState/InputState';
import VoteBtn from './AksidiApp/Bab3Props&State/2VoteBtn/Vote_Btn';
import VoteResult from './AksidiApp/Bab3Props&State/2VoteResult/Vote_Result';
import UseEffect from './AksidiApp/Bab3Props&State/3useEffect/Use_Effect';
import FormTodo from './AksidiApp/Bab5FormValidasi/1SPA/form-todo';
import DaftarTodo from './AksidiApp/Bab5FormValidasi/1SPA/daftar-todo';
import MultipleValidator from './AksidiApp/Bab5FormValidasi/2multipleValidator/event';


// bab 3 props and state
function App() {
  const [jumlahVote, setJumlahVote] = useState(0);

  function tambahVote() {
    setJumlahVote(jumlahVote + 1);
  }


  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // mencegah reload
    if (!email.includes('@')) {
      setError('Email tidak valid');
    } else {
      setError('');
      alert(`Berhasil dikirim: ${email}`);
    }
  }

  // bab 5 form validasi
  const [todos, setTodos] = useState([]);

  function tambahTodo(teksBaru) {
    setTodos([...todos, teksBaru]);
  }

  function hapusTodo(index) {
    const baru = [...todos];
    baru.splice(index, 1);
    setTodos(baru);
  }

  return (
    <div>
      <Header />
      <Isi />

      <Button teks="Klik Saya" />
      {/* bab 2 */}
      <Profill nama="Wisnu" pekerjaan="Web Developer" />

      {/* bab 3 props and state */}

      <Feedback />
      <InputState />
      <h1>Vote App</h1>
      <VoteBtn onVote={tambahVote} />
      <VoteResult jumlah={jumlahVote} />
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
      < UseEffect />

      {/* bab 5 */}
      <h1>Todo App</h1>
      <FormTodo onTambah={tambahTodo} />
      <DaftarTodo todos={todos} onHapus={hapusTodo} />

      <h1>multiplevalidator</h1>
      < MultipleValidator />

      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Selamat Datang di React!</h1>;
}

function Isi() {
  const nama = "Coba kon";
  return <p>Halo, {nama}, ini adalah paragraf dari komponen Isi.</p>;
}

function Button({ teks }) {
  function klik() {
    alert("Tombol diklik");
  }

  return <button onClick={klik}>{teks}</button>;
}

function Footer() {
  return <p>© 2025 - Belajar React</p>;
}

export default App;
