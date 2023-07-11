"use client";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Portfolio from "./page";
import Container from "@mui/material/Container";
import "../globals.css";

function PortfolioLayout() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
        <Portfolio />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PortfolioLayout;
