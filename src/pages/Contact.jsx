import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

import './Contact.css';

const Contact = () => {
  return (
    <Container className="contact-page">
      <div className="contact-header text-center py-4 mb-4">
        <h2>Contactez-nous</h2>
        <p>Une question ? Une suggestion ? On est là pour vous aider.</p>
      </div>

      <Card className="contact-card shadow-sm p-4 mb-5">
        <h5 className="mb-3">Nos coordonnées</h5>

        <div className="mb-3 d-flex align-items-center gap-2">
          <FaEnvelope size={18} style={{ color: '#F97316' }} />
          <span>Email : <a href="mailto:dikko.business01@gmail.com">dikko.business01@gmail.com</a></span>
        </div>

        <div className="mb-3 d-flex align-items-center gap-2">
          <FaPhoneAlt size={18} style={{ color: '#F97316' }} />
          <span> Tel: +221 77 497 72 23 </span>
        </div>
        <div className="social-header text-center mb-3">
            <h5>Suivez-nous sur nos réseaux pour ne rien rater 🌱</h5>
        </div>
        
            <div className="social-icons text-center">
            <a href="https://wa.me/221774977223"
            target="_blank"rel="noopener noreferrer"title="WhatsApp Business">
                <FaWhatsapp size={30} style={{ color: '#25D366' }} />
            </a>

            <a href="https://www.instagram.com/dikko_local" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} style={{ color: '#E1306C' }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575606767923" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} style={{ color: '#1877F2' }} />
            </a>
            <a href="https://www.tiktok.com/@dikko_local" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={30} style={{ color: '#000000' }} />
            </a>
            </div>

      </Card>
    </Container>
  );
};

export default Contact;
