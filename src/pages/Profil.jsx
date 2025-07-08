import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { Container, Table, Alert, Spinner, Card } from 'react-bootstrap';
import EditProfileModal from '../components/EditProfileModal';
import ChangePasswordModal from '../components/ChangePasswordModal';
import './Profil.css';

const Profil = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${user.token}` },
        };
        const { data } = await axios.get('/api/orders/myorders', config);
        setOrders(data);
      } catch (err) {
        setError('Erreur lors du chargement des commandes.');
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user.token]);

  return (
    <Container className="profil-page py-4">
      <h2 className="profil-title mb-4">Bonjour, {user?.name} </h2>

      <Card className="profil-card mb-4 p-3 shadow-sm">
        <h4>Mes informations</h4>
        <p><strong>Nom :</strong> {user?.name || 'Non renseigné'}</p>
        <p><strong>Email :</strong> {user?.email || 'Non renseigné'}</p>

        <div className="d-flex gap-3 mt-3">
          <button className="btn-orange" onClick={() => setShowEditModal(true)}>Modifier mon profil</button>
          <button className="btn-outline-orange" onClick={() => setShowPasswordModal(true)}>Changer mot de passe</button>
        </div>
      </Card>

      <Card className="orders-card p-3 shadow-sm">
        <h4>Mes commandes</h4>
        {loading ? (
          <div className="text-center py-3">
            <Spinner animation="border" variant="warning" />
          </div>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : orders.length === 0 ? (
          <p>Aucune commande passée.</p>
        ) : (
          <Table striped bordered hover responsive className="orders-table mt-3">
            <thead className="table-header">
              <tr>
                <th>Date</th>
                <th>Produits</th>
                <th>Total</th>
                <th>Payée</th>
                <th>Livrée</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id}>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>
                    {order.orderItems.map(item => (
                      <div key={item.product}>
                        {item.name} × {item.quantity}
                      </div>
                    ))}
                  </td>
                  <td>{order.totalPrice.toLocaleString()} FCFA</td>
                  <td>{order.isPaid ? '✅' : '❌'}</td>
                  <td>{order.isDelivered ? '✅' : '❌'}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>

      {/* Modales */}
      <EditProfileModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        user={user}
        onUpdate={() => window.location.reload()} // Recharge les infos modifiées
      />

      <ChangePasswordModal
        show={showPasswordModal}
        onHide={() => setShowPasswordModal(false)}
        user={user}
      />
    </Container>
  );
};

export default Profil;
