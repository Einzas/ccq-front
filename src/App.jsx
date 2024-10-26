import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';
import Socios from './pages/Socios';
import Ayuda from './pages/Ayuda';
import Configuracion from './pages/Configuracion';
import Eventos from './pages/Eventos';
import Informes from './pages/Informes';
import Membresias from './pages/Membresias';
import Notificaciones from './pages/Notificaciones';
import Perfil from './pages/Perfil';

function App() {
  return (
    <main className="w-full">
      <Routes>
        {/* Ruta pública */}
        <Route path="/login" element={<Login />} />
        {/* Ruta protegida: Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/socios"
          element={
            <PrivateRoute>
              <Socios />
            </PrivateRoute>
          }
        />
        <Route
          path="/ayuda"
          element={
            <PrivateRoute>
              <Ayuda />
            </PrivateRoute>
          }
        />
        <Route
          path="/configuracion"
          element={
            <PrivateRoute>
              <Configuracion />
            </PrivateRoute>
          }
        />
        <Route
          path="/eventos"
          element={
            <PrivateRoute>
              <Eventos />
            </PrivateRoute>
          }
        />
        <Route
          path="/informes"
          element={
            <PrivateRoute>
              <Informes />
            </PrivateRoute>
          }
        />
        <Route
          path="/membresias"
          element={
            <PrivateRoute>
              <Membresias />
            </PrivateRoute>
          }
        />
        <Route
          path="/notificaciones"
          element={
            <PrivateRoute>
              <Notificaciones />
            </PrivateRoute>
          }
        />
        <Route
          path="/membresias"
          element={
            <PrivateRoute>
              <Membresias />
            </PrivateRoute>
          }
        />
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          }
        />

        {/* Redirige cualquier otra ruta no definida */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </main>
  );
}

export default App;
