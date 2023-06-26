import './globals.css'

export const metadata = {
  title: 'Emily McLean',
  description: 'Portfolio for Emily',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Hello World!</h1>
        </header>
        {children}
      </body>
    </html>
  )
};
