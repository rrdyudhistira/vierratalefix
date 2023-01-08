import Link from "next/link";
import { withRouter } from "next/router";

function Navbar({ router }) {
  const navs = [
    { text: "Home", href: "/" },
    { text: "Merchandise", href: "#merchandise" },
    { text: "Gallery", href: "#" },
    { text: "Contact Us", href: "#contact" }
  ];

  return (
    <nav className="navbar">
      <div className="container-navbar">
        {/* <image src="/logo_header.jpg" width={30} height={30} alt="logo"></image> */}
        <ul className="nav-links">
          {navs.map((nav, idx) => (
            <li
              key={`nav-${idx}`}
              className={`nav-item ${router.pathname == nav.href ? "active" : ""
                }`}
            >
              <Link className="nav-text" href={nav.href} passHref prefetch={false}>
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
