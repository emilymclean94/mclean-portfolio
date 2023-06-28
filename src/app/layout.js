import './globals.css';
import NavBar from './components/Navbar';

export const metadata = {
  title: 'Emily McLean',
  description: 'Portfolio for Emily',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>

        {children}

        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  )
};
