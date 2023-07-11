"use client";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Portfolio from "./page";
import Container from "@mui/material/Container";
import "../globals.css";
import ProjectCards from "../components/ProjectCards";

function PortfolioLayout() {
  return (
    <main>
      <header>
        <NavBar />
      </header>
      <Container>
        <Portfolio />
      </Container>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default PortfolioLayout;
