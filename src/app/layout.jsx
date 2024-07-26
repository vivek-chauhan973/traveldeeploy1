// src/app/layout.jsx

import Head from 'next/head'; // Import Head from Next.js for managing document metadata
import './globals.css'; // Adjust path as per your actual structure

const RootLayout = ({ children }) => {
  return (
    <html>
      <Head>
        <title>Your Title Here</title>
        <meta name="description" content="Your description here" />
        {/* Add other meta tags as needed */}
      </Head>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
