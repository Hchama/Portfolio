import React, { useEffect } from 'react';

const useKeyboard = (targetKeys) => {
  const [pressed, setPressed] = React.useState(
    targetKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (targetKeys.includes(key)) setPressed((state) => ({ ...state, [key]: true }));
    };

    const handleKeyUp = ({ key }) => {
      if (targetKeys.includes(key)) setPressed((state) => ({ ...state, [key]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [targetKeys]);

  return pressed;
};

export default useKeyboard;
