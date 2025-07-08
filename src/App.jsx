import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import OrderSuccess from './pages/OrderSuccess';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import Profil from './pages/Profil';
import Contact from './pages/Contact';
import BoxDetailAdiouma from './pages/BoxDetailAdiouma';
import BoxDetailBinetou from './pages/BoxDetailBinetou';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <MainNavbar />
        <main className="main-content container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produits" element={<Products />} />
            <Route path="/panier" element={<Cart />} />
            <Route path="/commande" element={<Checkout />} />
            <Route path="/merci" element={<OrderSuccess />} />
            <Route path="/connexion" element={<Login />} />
            <Route path="/inscription" element={<Register />} />
            <Route path="/profil" element={<PrivateRoute><Profil /></PrivateRoute>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/produits/ndeye-adiouma" element={<BoxDetailAdiouma />} />
            <Route path="/produits/adja-binetou" element={<BoxDetailBinetou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
