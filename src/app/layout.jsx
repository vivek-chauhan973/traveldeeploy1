// components/RootLayout.js

import { Inter } from 'next/font/google';
import './globals.css'; // Adjust the path based on your actual project structure

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }) => {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
};

export default RootLayout;
