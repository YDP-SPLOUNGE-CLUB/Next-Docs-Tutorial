// src/app/jks/loading/loading.tsx
"use client";

import React from 'react';

const Loading: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'black',
      zIndex: 10000
    }}>
      <div style={{ textAlign: 'center' }}>
        <div className="spinner" style={{ marginBottom: '1rem' }}>
          <style jsx>{`
            .spinner {
              border: 4px solid rgba(0, 0, 0, 0.1);
              width: 36px;
              height: 36px;
              border-radius: 50%;
              border-left-color: #09f;
              animation: spin 1s linear infinite;
            }

            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
        <div>Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
