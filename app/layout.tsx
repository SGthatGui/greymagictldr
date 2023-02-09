import Navbar from '@/ui/navbar';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/* <head />
      
      <head /> */}
      <body>
        {/* <header>
          <Navbar />
        </header> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
