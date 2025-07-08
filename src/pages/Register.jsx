import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css'; // même style que Login

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // pour stocker l'utilisateur après inscription

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if(formData.password !== formData.confirmPassword){
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('/api/users/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      login(res.data); // stocke l'utilisateur dans le contexte
      navigate('/profil'); // redirige vers profil après inscription
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de l’inscription');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="login-page">
      <div className="login-card shadow">
        <h2 className="text-center mb-4">Créer un compte</h2>
        
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword" className="mb-4">
            <Form.Label>Confirmer le mot de passe</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength={6}
            />
          </Form.Group>

          <div className="d-grid">
            <Button type="submit" className="btn-orange" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "S'inscrire"}
            </Button>
          </div>
        </Form>

        <p className="text-center mt-3">
          Déjà un compte ? <a href="/connexion">Se connecter</a>
        </p>
      </div>
    </Container>
  );
};

export default Register;
