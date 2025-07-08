import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { Row, Col, Container } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => {
        console.log('>> Données reçues :', res.data);
        // Si res.data.products existe, on prend ce tableau, sinon res.data directement
        setProducts(res.data.products ? res.data.products : res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {Array.isArray(products) && products.length > 0 ? (
          products.map(product => (
            <Col key={product._id} md={4} sm={6} xs={12} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <p className="text-center">Aucun produit disponible pour le moment.</p>
        )}
      </Row>
    </Container>
  );
};

export default ProductList;
