import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-purple-500 min-h-screen flex flex-col">
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto text-center text-2xl font-semibold">
          Train Status Checker
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto text-center text-sm text-gray-600">
          © 2023 Train Status Checker. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
