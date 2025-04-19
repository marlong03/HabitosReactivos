import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsuarioPage from './pages/UsuarioPage';
import HabitForm from './components/HabitForm';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>

      <BrowserRouter>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route path="/new" element={<HabitForm />} />
            <Route path="/" element={<UsuarioPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
