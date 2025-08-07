// BELAJAR STRUKTUR DASAR ROUTING
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Beranda from './Beranda';
import Tentang from './Tentang';
import Kontak from './kontak';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/Home">Beranda</Link> | <Link to="/tentang">Tentang</Link> | <Link to="/kontak">Kontak</Link>
      </nav>

      <Routes>
        <Route path="/Home" element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </Router>
  );
}

export default App;
