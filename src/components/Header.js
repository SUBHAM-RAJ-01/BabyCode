import { useAuth } from '../context/AuthContext';
import { logout } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaBars } from 'react-icons/fa'; // Add icons

export const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header style={{
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '2.5rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
    }}>
      {/* Left Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <FaCode size={24} color="#61dafb" />
      </div>

      {/* Center Name */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: '600',
        fontSize: '1.5rem',
        color: '#61dafb'
      }}>
        BabyCode
      </div>

      {/* Right Menu */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {currentUser && (
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '1px solid #444',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Logout
          </button>
        )}
        <FaBars size={20} color="white" style={{ cursor: 'pointer' }} />
      </div>
    </header>
  );
};
