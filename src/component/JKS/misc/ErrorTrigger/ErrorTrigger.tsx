'use client';

import React, { useState } from 'react';

const ErrorTrigger = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    // 일부러 에러 발생
    throw new Error('This is a simulated error.');
  }

  return (
    <div>
      <h1>Click the button to trigger an error</h1>
      <button onClick={() => setShouldThrow(true)}>Trigger Error</button>
    </div>
  );
};

export default ErrorTrigger;
