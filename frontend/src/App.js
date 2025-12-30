import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Auth/Signup";
import NotFound from "./pages/NotFound";
import Login from "./pages/Auth/Login";
import Account from "./pages/Account";
import AdminUsersList from "./pages/AdminUsersList";
import AdminDash from "./pages/AdminDash";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Messages from "./pages/Messages";
import SearchResults from "./pages/SearchResults";
import EmailComponent from "./components/Email";

const PrivateRoutes = () => {
    const token = localStorage.getItem("token");

    try {
        const decoded = token && jwtDecode(token);
        const authenticated = decoded?.userId && decoded.exp * 1000 > Date.now();

        return authenticated ? <Outlet /> : <Navigate to="/login" replace />;
    } catch {
        return <Navigate to="/login" replace />;
    }
};

function App() {
    return (
        <div
            style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/product/:id" element={<Product />} />

                <Route element={<PrivateRoutes />}>
                    <Route path="/account" element={<Account />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* Admin */}
                    <Route path="/adminDashboard" element={<AdminDash />} />
                    <Route path="/manageUsers" element={<AdminUsersList />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/email" element={<EmailComponent />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;