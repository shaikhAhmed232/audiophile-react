import React from "react";
import { Link } from "react-router-dom";

// component import
import Container from "../../Common/Container";
import Logo from "../Header/Shared/Logo";
import FacebookIcon from "../../Icons/FacebookIcon";
import TwitterIcon from "../../Icons/TwitterIcon";
import InstagramIcon from "../../Icons/InstagramIcon";

// local import
import { styles } from "../../../style";
import { links, LinkType } from "../../../data";

function Footer() {
  return (
    <section
      className={`bg-primaryBlack text-primaryWhite ${styles.sectionPadding}`}
    >
      <Container>
        <div className="sm:px-0 px-5">
          <div className="flex sm:flex-row flex-col items-center  sm:justify-between">
            <Logo />
            <ul className={`flex xs:flex-row flex-col list-none`}>
              {links.map((link: LinkType, index: number) => (
                <li
                  key={link.id}
                  className={`text-primaryWhite font-barlow py-5 xs:${
                    index === 0
                      ? "pr-7"
                      : index === links.length - 1
                      ? "pl-7"
                      : "px-7"
                  } px-0 hover:text-primaryOrange active:text-primaryOrange transition-all cursor-pointer text-center`}
                >
                  <Link to={`${link.link}`}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <p className="sm:w-[500px] w-full sm:text-start text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eius
              distinctio quia architecto, illo rerum quae, modi possimus
              voluptatum blanditiis amet delectus enim est quasi? Illo
              consequuntur doloremque quos unde eius laborum nobis sint
              aspernatur nisi. Fugit ullam eum cumque.
            </p>
          </div>
          <div className="mt-4 flex xs:flex-row flex-col text-center justify-between">
            <div className="capitalize opacity-[0.7]">
              copyright {new Date().getFullYear()}. All rights reserved.
            </div>
            <div className="xs:mt-0 mt-2 xs:bock flex justify-center">
              <Link to="#">
                <FacebookIcon />
              </Link>
              <Link to="#">
                <TwitterIcon />
              </Link>
              <Link to="#">
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
