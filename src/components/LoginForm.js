import { useState } from 'react';
import { login } from '../services/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await login(email, password);
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      toast.error(error.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      toast.success('Google login successful!');
      navigate('/');
    } catch (error) {
      toast.error(error.message || 'Google login failed');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Student Dashboard Login</h2>
        
        <button 
          onClick={handleGoogleLogin}
          disabled={googleLoading}
          style={styles.googleButton}
        >
          {googleLoading ? (
            <span style={styles.buttonContent}>
              <div style={styles.spinner}></div>
              Signing in...
            </span>
          ) : (
            <span style={styles.buttonContent}>
              <FaGoogle style={styles.icon} />
              Continue with Google
            </span>
          )}
        </button>

        <div style={styles.divider}>
          <span style={styles.dividerText}>OR</span>
        </div>

        <form onSubmit={handleEmailLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <FaEnvelope style={styles.inputIcon} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          
          <div style={styles.inputGroup}>
            <FaLock style={styles.inputIcon} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={styles.submitButton}
          >
            {loading ? (
              <span style={styles.buttonContent}>
                <div style={styles.spinner}></div>
                Signing in...
              </span>
            ) : (
              'Sign In with Email'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    padding: '20px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    width: '100%',
    maxWidth: '420px',
  },
  title: {
    textAlign: 'center',
    color: '#2d3748',
    marginBottom: '30px',
    fontSize: '24px',
    fontWeight: '600',
  },
  googleButton: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    backgroundColor: 'white',
    color: '#4a5568',
    fontWeight: '500',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#f8fafc',
      borderColor: '#cbd5e0',
    },
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4299e1',
    color: 'white',
    fontWeight: '500',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#3182ce',
    },
  },
  inputGroup: {
    position: 'relative',
    marginBottom: '20px',
  },
  inputIcon: {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#a0aec0',
  },
  input: {
    width: '100%',
    padding: '12px 12px 12px 40px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    ':focus': {
      outline: 'none',
      borderColor: '#4299e1',
      boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.2)',
    },
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
  },
  dividerText: {
    padding: '0 10px',
    color: '#a0aec0',
    fontSize: '14px',
  },
  buttonContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  icon: {
    fontSize: '18px',
  },
  spinner: {
    width: '18px',
    height: '18px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderRadius: '50%',
    borderTopColor: 'white',
    animation: 'spin 1s linear infinite',
  },
  '@keyframes spin': {
    to: { transform: 'rotate(360deg)' },
  },
};