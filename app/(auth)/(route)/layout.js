import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen mt-16 items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
