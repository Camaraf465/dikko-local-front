import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './BoxDetail.css';

const BoxDetailAdiouma = () => {
  const { addToCart } = useCart();

  const product = {
    _id: 'adiouma123',
    name: 'Box Ndeye Adiouma',
    price: 12000,
    image: '/images/Box_Adiou.jpg',
    description:
      "Une box  pensée pour vos repas de régimes ou juste accompagnée vos plats. Elle contient un assortiment de 10 variétés de légumes frais, parfait pour cuisiner sainement toute la semaine.",
    items: [
        'Salade',
        '1,5Kg Comcombre',
        '1Kg Carotte',
        '2Kg Tomates',
        '500g Tomates cerises',
        '500g Haricots',
        '500g Poivrons rouges',
        '500g Poivrons jaunes',
        '1Kg Poivrons verts',
        'Pot Nokoss 1kg',
    ],
    videoUrl: '/videos/adiouma.mp4',
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

export default BoxDetailAdiouma;
