import { Link, useNavigate } from 'react-router';
import { MapPin, LogOut } from 'lucide-react';
import { authAPI } from '../../utils/api';
import '../styles/navbar.css';

export function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authAPI.logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <MapPin className="logo-icon" />
          <span className="logo-text">RouteWise</span>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/events" className="nav-link">
            Events
          </Link>
          <Link to="/live-map" className="nav-link">
            Live Map
          </Link>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </div>

        {/* Logout Button */}
        <button onClick={handleLogout} className="logout-button">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
}
