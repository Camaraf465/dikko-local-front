import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import './ProductCard.css';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // Message visible 2 secondes
  };

  return (
    <Card className="product-card">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="product-img"
      />
      <Card.Body className="product-body">
        <Card.Title className="product-title">{product.name}</Card.Title>
        <Card.Text className="product-description">{product.description}</Card.Text>
        <Card.Text className="product-weight">Poids : {product.weight} g</Card.Text>
        <Card.Text className="product-price">{product.price.toLocaleString()} FCFA</Card.Text>
        <Button className="product-btn" onClick={handleAddToCart}>
          <FaShoppingCart style={{ marginRight: '8px' }} />
          Ajouter au panier
        </Button>

        {added && (
          <p style={{ color: 'green', marginTop: '10px', fontWeight: 'bold' }}>
            Produit ajouté au panier !
          </p>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
