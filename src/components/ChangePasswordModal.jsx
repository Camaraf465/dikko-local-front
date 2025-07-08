import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const ChangePasswordModal = ({ show, onHide, user }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      await axios.put('/api/users/password', { currentPassword, newPassword }, config);
      setMessage('Mot de passe mis à jour !');
      setError('');
      setCurrentPassword('');
      setNewPassword('');
      setTimeout(onHide, 1500);
    } catch (err) {
      setError('Échec de la mise à jour. Vérifie ton mot de passe actuel.');
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Changer mon mot de passe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleChange}>
          <Form.Group className="mb-3">
            <Form.Label>Mot de passe actuel</Form.Label>
            <Form.Control type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nouveau mot de passe</Form.Label>
            <Form.Control type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          </Form.Group>
          <div className="mt-3 d-flex justify-content-end">
            <Button  onClick={onHide} className="btn-outline-orange me-2">Annuler</Button>
            <Button  className="btn-orange" type="submit">Mettre à jour</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ChangePasswordModal;

