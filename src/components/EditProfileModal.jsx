import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import './EditProfileModal.css';

const EditProfileModal = ({ show, onHide, user, onUpdate }) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      const { data } = await axios.put('/api/users/profile', { name, email }, config);
      onUpdate(data); // Pour rafraîchir les données du profil
      onHide();
    } catch (err) {
      setError('Échec de la mise à jour du profil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modifier mon profil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <div className="mt-3 d-flex justify-content-end">
                <Button onClick={onHide} className="btn-outline-orange me-2">
                    Annuler
                </Button>
                <Button type="submit" className="btn-orange" disabled={loading}>
                    {loading ? 'Mise à jour...' : 'Enregistrer'}
                </Button>
         </div>

        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProfileModal;
