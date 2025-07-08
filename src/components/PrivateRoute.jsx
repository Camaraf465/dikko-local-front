import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Si pas connecté, redirige vers la page de connexion
    return <Navigate to="/connexion" replace />;
  }

  // Sinon, affiche le contenu enfant (page protégée)
  return children;
};

export default PrivateRoute;
