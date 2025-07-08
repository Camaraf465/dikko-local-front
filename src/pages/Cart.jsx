import { useCart } from '../context/CartContext';
import { ListGroup, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; // ← à créer si pas encore fait

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/commande');
  };

  return (
    <div className="cart-page container py-4">
      <h2 className="cart-title mb-4">🛒 Mon Panier</h2>

      {cart.length === 0 ? (
        <Alert variant="info">Votre panier est vide.</Alert>
      ) : (
        <>
          <Card className="cart-card mb-4">
            <ListGroup variant="flush">
              {cart.map((item) => (
                <ListGroup.Item key={item._id} className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    {item.quantity} × {item.price.toLocaleString()} FCFA
                  </div>
                  <Button size="sm" variant="danger" onClick={() => removeFromCart(item._id)}>
                    Retirer
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>

          <div className="cart-summary text-end mb-3">
            <h5>Total : <strong>{total.toLocaleString()} FCFA</strong></h5>
          </div>

          <div className="d-flex justify-content-end gap-2">
            <Button variant="outline-secondary" onClick={clearCart}>
              Vider le panier
            </Button>
            <Button className="btn-orange" onClick={handleCheckout}>
              Commander
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
