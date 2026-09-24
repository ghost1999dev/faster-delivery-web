import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { useAuth } from "./context/useAuth";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { DashboardPage } from "./pages/Dashboard";
import { CategoriesPage } from "./pages/CategoriesPage";

const ProtectedRoute = () => {
  const { isAuthenticated, isHydrated } = useAuth();
  if (!isHydrated) return null;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
const PublicRoute = () => {
  const { isAuthenticated, isHydrated } = useAuth();
  if (!isHydrated) return null;
  return !isAuthenticated ? <Outlet /> : <Navigate to="/catalog" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route
            path="/login"
            element={<LoginPage onNavigateToRegister={() => {}} />}
          />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/catalog" replace/>}  />
            <Route path="/catalog" element={<DashboardPage/>}/>
            <Route path="/categories/create" element={<CategoriesPage/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
