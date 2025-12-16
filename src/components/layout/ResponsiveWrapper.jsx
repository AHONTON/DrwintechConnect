import React from 'react';

const ResponsiveWrapper = ({ children, fullScreen = false }) => {
  // Mode plein écran pour les layouts split
  if (fullScreen) {
    return (
      <div className="fixed inset-0 overflow-hidden">
        {children}
      </div>
    );
  }

  // Mode centré standard pour les pages simples
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 sm:py-12 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default ResponsiveWrapper;