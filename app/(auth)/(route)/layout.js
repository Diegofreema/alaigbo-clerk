import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen sm:mt-16 mt-4 items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
