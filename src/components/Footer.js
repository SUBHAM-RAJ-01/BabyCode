import { FaLinkedin, FaGlobe } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#000',
      color: 'white',
      padding: '1rem',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <div style={{ marginBottom: '0.75rem' }}>
        <a
          href="www.linkedin.com/in/subham-raj-5a1a402ab"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'white',
            margin: '0 1rem',
            fontSize: '1.8rem',
            transition: 'color 0.3s, transform 0.3s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#3498db';
            e.currentTarget.style.transform = 'scale(1.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://subhamport.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'white',
            margin: '0 1rem',
            fontSize: '1.8rem',
            transition: 'color 0.3s, transform 0.3s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#3498db';
            e.currentTarget.style.transform = 'scale(1.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <FaGlobe />
        </a>
      </div>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Subham. All rights reserved.
      </p>
    </footer>
  );
};
