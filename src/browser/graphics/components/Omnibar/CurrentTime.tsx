import React, { useEffect, useState } from 'react';

export const CurrentTime = () => {

  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      setCurrentTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      { currentTime }
    </React.Fragment>
  )
}