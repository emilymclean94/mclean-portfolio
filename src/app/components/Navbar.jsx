import Link from "next/link";

function NavBar() {
    return (
      <header className="">
        <h1>
            <Link href="/">Emily McLean</Link>
        </h1>

        <ul>
            <li>
                <Link href="/about_me/page.js">About Me</Link>
            </li>
            <li>
                <Link href="/portfolio/page.js">Portfolio</Link>
            </li>
            <li>
                <Link href="/resume/page.js">Resume</Link>
            </li>
            <li>
                <Link href="/contact/page.js">Contact Me</Link>
            </li>
        </ul>
      </header>
    )
  }

  export default NavBar;