import './globals.css';


export const metadata = {
  title: 'Emily McLean',
  description: 'Portfolio for Emily',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <title>Emily McLean</title>
      </head>
      <body className='background' sx={{ height: 100 }}>
        
        {children}
        
      </body>
    </html>
  )
};


