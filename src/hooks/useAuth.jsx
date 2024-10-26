import { jwtDecode } from 'jwt-decode';

export const useAuth = () => {
  const user = localStorage.getItem('userInfo');
  const token = JSON.parse(user)?.token;

  if (!token) {
    return false;
  }

  try {
    // Decodifica el token
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Tiempo actual en segundos

    // Verifica si el token ha expirado
    if (decoded.exp < currentTime) {
      localStorage.removeItem('userInfo'); // Elimina datos si el token expiró
      return false;
    }

    return true;
  } catch (error) {
    // Si el token no es válido o está mal formateado, captura el error
    console.error('Invalid token:', error);
    return false;
  }
};
