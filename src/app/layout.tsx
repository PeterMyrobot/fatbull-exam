'use client';

import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';
import Profile from '@/components/Profile/Profile';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen flex-col sm:flex-row`}>
        <QueryClientProvider client={queryClient}>
          <NavBar />
          <div className="h-screen flex-1 flex-row">{children}</div>
          <Profile />
          <MobileNavBar />
        </QueryClientProvider>
      </body>
    </html>
  );
}
