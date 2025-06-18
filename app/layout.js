import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

export const metadata = {
  title: 'My Landing Page',
  description: 'Created using Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
