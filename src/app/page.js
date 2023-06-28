import Link from "next/link";
import RootLayout from "./layout";
import NavBar from "./components/Navbar";

function Home() {
  return (
    <main className="">
      <NavBar />
    </main>
  )
}

export default Home;

//! Welcome to the Pseudo Code!!

// TODO: Import Link
  // ? <Link href="/">Home</Link>
  // ? <Link href="/about">About Me</Link>
  // ? <Link href="/portfolio">Portfolio</Link>
  // ? <Link href="/resume">Resume</Link>
  // ? <Link href="/contact">Contact Me</Link>

// TODO: Header/Navbar
  // ? Full name links to homepage
    // * onClick and event handler
  // ? Link to About
    // * onClick and event handler
  // ? Link to Portfolio
    // * onClick and event handler
  // ? Link to Resume
    // * onClick and event handler
  // ? Link to contact form
    // * onClick and event handler
  // ? onHover for all nav links
  // ? onHover for name in top left to link to homepage

// TODO: Footer
  // ? Github link
    // * href link 
  // ? LinkedIn Link
    //* href link

// TODO: Main <div> for intro 
  // ? <div> for all contents
  // ? <div> for intro text
  // ? <div> for button
    // * onClick and event handler

// TODO: Button to route to portfolio page
  // ? Link from homepage to portfolio
    // * onClick and event handler

// TODO: Favicon
