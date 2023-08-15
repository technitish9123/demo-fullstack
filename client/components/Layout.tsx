import React from "react";

interface LayoutProps {
  children: React.ReactNode; // Specify the type of 'children' prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
