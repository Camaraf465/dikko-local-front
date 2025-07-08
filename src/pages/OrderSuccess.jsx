import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const OrderSuccess = () => {
  return (
    <Container className="mt-5 text-center">
      <h2>🎉 Merci pour votre commande !</h2>
      <p>Nous avons bien reçu votre commande. Vous serez bientôt contacté pour la livraison.</p>
      <Link to="/">
        <Button variant="primary">Retour à l'accueil</Button>
      </Link>
    </Container>
  );
};

export default OrderSuccess;
