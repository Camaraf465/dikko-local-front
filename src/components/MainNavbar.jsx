import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.jpg';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';


const MainNavbar = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar expand="lg" className="shadow-sm py-3" style={{ backgroundColor: '#FDF6EC' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Dikk'O Local Logo"
            height="45"
            className="me-2"
            style={{ borderRadius: '50%' }}
          />
          <span style={{ color: '#3A5D3B', fontWeight: 'bold', fontSize: '1.2rem' }}>
            Dikk'O Local
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Acceuil</Nav.Link>
            <Nav.Link as={Link} to="/produits">Produits</Nav.Link>

            {/* Panier avec icône et badge */}
            <Nav.Link as={Link} to="/panier" className="d-flex align-items-center gap-2 ms-3">
              Mon panier
              <div style={{ position: 'relative' }}>
                <FaShoppingCart size={20} />
                {totalItems > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      backgroundColor: 'red',
                      color: 'white',
                      borderRadius: '50%',
                      padding: '2px 6px',
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      lineHeight: '1',
                    }}
                  >
                    {totalItems}
                  </span>
                )}
              </div>
            </Nav.Link>


            {user ? (
              <>
                <Nav.Link as={Link} to="/profil" className="d-flex align-items-center gap-2 ms-3">
                <FaUserCircle size={18} />
                Profil
              </Nav.Link>

                <Button
                  onClick={handleLogout}
                  variant="outline-danger"
                  size="sm"
                  className="ms-2"
                >
                  Déconnexion
                </Button>
              </>
            ) : (
              <Nav.Link as={Link} to="/connexion">Connexion</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
