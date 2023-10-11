import React from 'react';

const ErrorHandling = ({ errorMessage, onRetry }) => {
  return (
    <div className="error-handler">
      <p>{errorMessage}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
};

export default ErrorHandling;
