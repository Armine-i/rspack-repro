import { useState, useEffect } from 'react';
// Using path alias to import from utils
import { getGreeting, getCurrentTime } from '@utils/greeting';

export const HelloWorld: React.FC = () => {
  const [time, setTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
    }}>
      <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>
        {getGreeting('Rspack')}
      </h1>
      <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>
        Current time: {time}
      </p>
      <div style={{
        marginTop: '2rem',
        padding: '1rem 2rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        backdropFilter: 'blur(10px)',
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          Built with TypeScript path aliases (@utils/*)
        </p>
      </div>
    </div>
  );
};
