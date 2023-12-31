"use client";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "../global.css";

function PortfolioLayout({ children }) {
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
      <body className="all-bg" sx={{ height: 100 }}>
        <header>
          <NavBar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

export default PortfolioLayout;
