import './Home.css';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // adapte ce chemin si besoin

function Home() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="home-container">
      {/* 👉 Slider ici */}
      <Slider />

      <section className="hero">
        <h1>Bienvenue chez Dikk’O Local</h1>
        <p>Des produits locaux, frais et bio, directement de nos champs à votre table.</p>
        <button onClick={() => window.location.href = '/produits'}>Découvrir nos produits</button>
      </section>

      <section className="featured-boxes">
        <h2>Nos Box phares</h2>
        <div className="boxes-list">
          {/* Box Ndeye Adiouma */}
          <div className="box-card">
            <img src="/images/Box_Adiou.jpg" alt="Box Ndeye Adiouma" className="box-image" />
            <h3>Box Adiouma</h3>
            <p>La box premium avec des produits sélectionnés.</p>
            <div className="box-actions">
              <Link to="/produits/ndeye-adiouma" className="btn-orange">Voir détails</Link>
              <button
                className="btn-orange"
                onClick={() =>
                  handleAddToCart({
                    _id: 'adiouma123',
                    name: 'Box Ndeye Adiouma',
                    price: 9500,
                    image: '/images/Box_Adiou.jpg',
                  })
                }
              >
                Ajouter au panier
              </button>
            </div>
          </div>

          {/* Box Adja Binetou */}
          <div className="box-card">
            <img src="/images/box_Adja.jpg" alt="Box Adja Binetou" className="box-image" />
            <h3>Box Yaaye</h3>
            <p>La box famille pour tous vos repas quotidiens.</p>
            <div className="box-actions">
              <Link to="/produits/adja-binetou" className="btn-orange">Voir détails</Link>
              <button
                className="btn-orange"
                onClick={() =>
                  handleAddToCart({
                    _id: 'binetou456',
                    name: 'Box Adja Binetou',
                    price: 12500,
                    image: '/images/box_Adja.jpg',
                  })
                }
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <h2>Nos engagements</h2>
        <div className="values-grid">
          <div className="value-card">
            <span className="value-icon">✅</span>
            <h3>100% local</h3>
            <p>Faits par des Sénégalais, pour des Sénégalais.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">👩🏽‍🌾</span>
            <h3>Solidarité agricole</h3>
            <p>Nous soutenons les producteurs locaux chaque jour.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🚚</span>
            <h3>Livraison rapide</h3>
            <p>Produits livrés frais, soigneusement emballés.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
