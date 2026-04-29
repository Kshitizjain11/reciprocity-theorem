import React from 'react';

const AlertDialog = ({ message, onClose }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '30px', maxWidth: '500px', width: '90%', zIndex: 1001 }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '15px' }}>Alert Message</h2>
        <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.5' }}>{message}</p>
        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '10px 20px',
            backgroundColor: '#0066cc',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertDialog;
