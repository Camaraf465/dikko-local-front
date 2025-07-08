import React, { useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';  // <-- importer useAuth
import { Container, Form, Button, Row, Col, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { user } = useAuth(); // <-- récupérer l'utilisateur connecté
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: ''
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!user) {
      alert("Vous devez être connecté pour passer une commande.");
      navigate('/connexion');
      return;
    }

    try {
      const orderPayload = {
        orderItems: cart.map(item => ({
          name: item.name,
          quantity: item.quantity,
          image: item.image,
          price: item.price,
          product: item._id,
        })),
        shippingAddress: {
          address: formData.address,
          city: formData.city,
          phone: formData.phone,
        },
        totalPrice: total,
      };

      await axios.post('/api/orders', orderPayload, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      });

      clearCart();
      navigate('/merci');
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la validation de la commande');
    }
  };

  return (
    <Container className="mt-4">
      <h2>Validation de la commande</h2>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nom complet</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Adresse</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="city">
                <Form.Label>Ville</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Confirmer la commande
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <h4>Résumé de la commande</h4>
            <ListGroup variant="flush">
              {cart.map(item => (
                <ListGroup.Item key={item._id}>
                  {item.name} x {item.quantity} = {item.price * item.quantity} FCFA
                </ListGroup.Item>
              ))}
            </ListGroup>
            <h5 className="mt-3">Total : {total} FCFA</h5>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Checkout;
