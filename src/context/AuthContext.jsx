import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (email, password) => {
    const res = await axios.post('/api/users/login', { email, password });
    setUser(res.data);
    localStorage.setItem('user', JSON.stringify(res.data));
  };

  const register = async (name, email, password) => {
    const res = await axios.post('/api/users/register', { name, email, password });
    setUser(res.data);
    localStorage.setItem('user', JSON.stringify(res.data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Ajouter le token dans les headers d'axios pour les requêtes protégées
  useEffect(() => {
    if (user?.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
