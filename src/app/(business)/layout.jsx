"use client";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Portfolio from "./portfolio/page";
import Container from "@mui/material/Container";
import "../global.css";

function PortfolioLayout({children}) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      {children}
        {/* <Portfolio /> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PortfolioLayout;
