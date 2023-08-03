export const metadata = {
  title: 'Emily McLean',
  description: 'Portfolio for Emily',
};

export default function RootLayout({children}) {


  return (
    <html lang="en">
      <head>
        <title>Emily McLean</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Ysabeau+Office&display=swap" rel="stylesheet"></link>
      </head>
      <body className="background" sx={{ height: 100 }}>

        {children}
        
      </body>
    </html>
  )
};


