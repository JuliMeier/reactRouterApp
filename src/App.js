import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page404 } from './pages/Page404';
import Header from './components/Header';
import Post from './pages/Post';
import Categoria from './pages/Categories';

// json-server --watch ./db.json --port=5000 para levantar el server con json-server

function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Sobre />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/categoria/:id/*' element={<Categoria />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router >
  );
}

export default App;
