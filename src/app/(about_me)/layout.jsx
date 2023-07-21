import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "../global.css"

function AboutLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Emily McLean</title>
        </head>
        <body id='about-bg' sx={{height: 100}}>
          <header>
            <NavBar />
          </header>
            {children}
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    )
  };

  export default AboutLayout;