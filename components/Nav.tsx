import React from "react";
import { Links } from "./Data";
import { Link } from "react-scroll";

type navProps = {
  containerStyles: string;
  linkStyles: string;
};

const Nav = ({ containerStyles, linkStyles }: navProps) => {
  return (
    <div>
      <nav className={`${containerStyles} `}>
        {Links.map((link) => (
          <Link
            key={link.title}
            to={link.path}
            offset={link.offset}
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            className={`${linkStyles}`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
