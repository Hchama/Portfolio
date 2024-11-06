import { useEffect, useState } from 'react';

const TutorialMessage = ({ message, duration = 20000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    visible && (
      <div className="tutorial-message">
        {message}
      </div>
    )
  );
};

export default TutorialMessage;
