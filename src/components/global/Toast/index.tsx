import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getCurrentGreeting } from './helpers';

const Toast = () => {
  useEffect(function greet() {
    const greeting = getCurrentGreeting({
      morning: 'Bom Dia',
      afternoon: 'Boa Tarde',
      night: 'Boa Noite'
    });

    toast.success(greeting, {
      duration: 1800,
      icon: '🎙️',
      style: {
        fontFamily: 'var(--fonts-unique)',
        fontSize: '1.6rem',
        background: 'var(--colors-scrollBar)',
        color: 'var(--colors-white)'
      }
    });
  }, []);

  return <Toaster />;
};

export default Toast;
