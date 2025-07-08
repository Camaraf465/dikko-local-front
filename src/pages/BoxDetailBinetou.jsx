import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './BoxDetail.css';

const BoxDetailBinetou = () => {
  const { addToCart } = useCart();

  const product = {
    _id: 'binetou456',
    name: 'Box Adja Binetou',
    price: 12500,
    image: '/images/box_Adja.jpg',
    description:
      "Une box premium avec 17 variétés de produits frais et soigneusement sélectionnés, idéale pour vos repas spéciaux ou pour offrir.",
    items: [
      '2KG Manioc',
      '1KG Patate',
      '3KG Carotte',
      '1KG Navet',
      '2KG Choux',
      '1KG Aubergine',
      '1KG Citrouille',
      '2KG Tomate',
      '500G Diakhato',
      '250G Piment vert',
      '250G Piment jaune',
      '250G Bissap',
      '500G Céleri (persil chinois)',
      '500G Persil (roff)',
      '500G Oignon vert',
      '500G Poivron vert',
      '500G Citron',


      
    ],
    videoUrl: '/videos/binetou.mp4', // vidéo locale
  };

  return (
    <div className="box-detail-container">
      <div className="box-media-column">
        <div className="box-video">
          <video controls width="100%" style={{ borderRadius: '15px' }}>
            <source src={product.videoUrl} type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        </div>

        <img src={product.image} alt={product.name} className="box-detail-image" />
      </div>

      <div className="box-detail-info">
        <h2>{product.name}</h2>
        <p className="box-detail-description">{product.description}</p>

        <h4 className="box-detail-price">{product.price} FCFA</h4>

        <button
          className="btn-orange with-icon"
          onClick={() => addToCart({ ...product, quantity: 1 })}
        >
          🛒 Ajouter au panier
        </button>

        <Link to="/" className="btn-secondary-outline mt-3">
          ← Retour à l’accueil
        </Link>

        <div className="box-content mt-4">
          <h5>Ce que contient cette box :</h5>
          <ul>
            {product.items.map((item, index) => (
              <li key={index}>✔ {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BoxDetailBinetou;
