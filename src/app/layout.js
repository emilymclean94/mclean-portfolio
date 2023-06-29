import './globals.css';
import NavBar from './components/Navbar';


export const metadata = {
  title: 'Emily McLean',
  description: 'Portfolio for Emily',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Emily McLean</title>
      </head>
      <body>
        <header>
          <NavBar />
        </header>

        {children}
      </body>
    </html>
  )
};


