import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./styles.css";

const Account = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    let isAdmin = false;

    if (token) {
        try {
            const decoded = jwtDecode(token);
            isAdmin = decoded.isAdmin === true;
        } catch {
            isAdmin = false;
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
    };

    return (
        <div className="account-page-wrapper">
            <div className="account-header">
                <h1>Account Settings</h1>
                <p className="subtitle">View account settings options below</p>
            </div>

            <div className="account-buttons">
                <button onClick={() => navigate("/contact")} className="setting-btn">Contact Support</button>
                {isAdmin && <button onClick={() => navigate("/admin")} className="setting-btn">Admin Dashboard</button>}
                <button onClick={handleLogout} className="setting-btn">Logout</button>
            </div>
        </div>
    );
};

export default Account;