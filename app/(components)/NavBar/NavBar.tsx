"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./NavBar.scss";
import { usePathname } from "next/navigation";

import { Gloock } from "next/font/google";
const gloock = Gloock({
  weight: '400',
  subsets: ['latin'],
})
interface Props {
  linkNames: string[];
}

function NavBar({ linkNames }: Props) {

  // array of links but in readonly mode
  const linksArr = [...linkNames] as const;

  // convert linksArr into string literal union type
  type linkNameType = typeof linksArr[number];

  //Initial nav link active states object (all flase)
  const initialLinkStates = Object.fromEntries(
    linksArr.map((linkname) => [linkname, false])
  );

  const pathname = usePathname();
  const path = pathname.split("/")[1] || "home";

  const [linkStates, setLinkStates] = useState(initialLinkStates);

  useEffect(() => {
    if (Object.keys(initialLinkStates).includes(path)) {
      setLinkStates({ ...initialLinkStates, [path]: true });
    }
  }, []);

  const linkClass = (name: linkNameType) =>
    `nav-link${linkStates[name] ? " active" : ""}`;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    console.log(e.target);
    
    setLinkStates({
      ...initialLinkStates,
      [e.currentTarget.id.split("-")[0]]: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link style={gloock.style} className="navbar-brand" href="/">RECIPES</Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  nav-content"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {linksArr.map(linkname=> {
              return (
                <li className="nav-item" key={`${linkname}${Math.random()}`}>
                <Link
                id={`${linkname}-link`}
                className={linkClass(linkname)}
                aria-current="page"
                href={`${linkname == "home" ? "/" : linkname}`}
                onClick={handleLinkClick}
              >
                 {linkname.charAt(0).toUpperCase() + linkname.slice(1)}
              </Link>
            </li>
              )
            })}
            {/* <li className="nav-item">
              <Link
                id="home-link"
                className={linkClass("home")}
                aria-current="page"
                href="/"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                id="check-link"
                className={linkClass("check")}
                href="/check"
                onClick={handleLinkClick}
              >
                Check
              </Link>
            </li> */}
            {/* <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
