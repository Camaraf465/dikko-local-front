import './Footer.css'; // styles personnalisés

const Footer = () => {
  return (
    <footer className="custom-footer mt-5">
      <p className="mb-2">&copy; {new Date().getFullYear()} Dikk'O Local - Tous droits réservés</p>
      <p>
        <a href="/contact">Contact</a> | <a href="/mentions-legales">Mentions légales</a>
      </p>
    </footer>
  );
};

export default Footer;
