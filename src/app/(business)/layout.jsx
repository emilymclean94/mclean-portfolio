"use client";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "../global.css";

function PortfolioLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Emily McLean</title>
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
