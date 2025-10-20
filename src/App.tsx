import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PublicRoute from "./components/auth/PublicRoute";

// Protected Pages
import Dashboard from "./pages/Dashboard";
import Gastos from "./pages/Gastos";
import Presupuesto from "./pages/Presupuesto";
import Reportes from "./pages/Reportes";
import Configuracion from "./pages/Configuracion";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rutas públicas (solo accesibles si NO estás autenticado) */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          {/* Rutas protegidas (solo accesibles si estás autenticado) */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="gastos" element={<Gastos />} />
            <Route path="presupuesto" element={<Presupuesto />} />
            <Route path="reportes" element={<Reportes />} />
            <Route path="configuracion" element={<Configuracion />} />
          </Route>

          {/* Ruta catch-all - redirigir a login si no está autenticado o al dashboard si lo está */}
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>

        {/* Configuración global de Toaster para notificaciones */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: "#4ade80",
                secondary: "#fff",
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </div>
    </Router>
  );
}
export default App;
