import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "../global.css";

function AboutLayout({ children }) {
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
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Montserrat+Alternates:wght@500&family=Secular+One&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body id="about-bg" sx={{ height: 100 }}>
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

export default AboutLayout;
