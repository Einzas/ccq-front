import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { PrivateRoute } from "./components/PrivateRoute";

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

        {/* Redirige cualquier otra ruta no definida */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </main>
  );
}

export default App;
