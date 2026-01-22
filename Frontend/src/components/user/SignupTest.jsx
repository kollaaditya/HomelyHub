import React from 'react';

const SignupTest = () => {
  const handleClick = () => {
    console.log('Test button clicked!');
    alert('Button works!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Test Signup</h1>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Test Button
      </button>
    </div>
  );
};

export default SignupTest;