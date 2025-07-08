import { useEffect, useState } from 'react';
import api from '../services/api';
import { Row, Col, Spinner, Alert, Form } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import './Products.css';
import { FaSearch } from 'react-icons/fa';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProducts = async (searchTerm = '') => {
    try {
      setLoading(true);
      const res = await api.get('/products', {
        params: searchTerm ? { name: searchTerm } : {},
      });
      setProducts(res.data);
      setError('');
    } catch (err) {
      setError('Erreur lors du chargement des produits');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts(search);
  };

  return (
    <div className="products-page">
      <section className="products-hero">
        <h2>Nos Produits</h2>
        <p>Découvrez nos produits frais et 100% locaux.</p>
      </section>

      <Form onSubmit={handleSearch} className="search-form">
        <Row className="align-items-center">
          <Col md={10}>
            <Form.Control
              type="text"
              placeholder="Rechercher un produit..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <button type="submit" className="search-btn">
              <FaSearch style={{ marginRight: '6px' }} />
              Rechercher
            </button>
          </Col>
        </Row>
      </Form>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" />
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : products.length === 0 ? (
        <Alert variant="info">Aucun produit trouvé.</Alert>
      ) : (
        <Row className="product-list">
          {products.map((product) => (
            <Col key={product._id} md={4} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Products;
