import React from "react";
import { FOOTER, FOOTER_CONTACT_TWO, SOCIALS } from "./Data";
import Link from "next/link";
import Image from "next/image";

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};
const Footer = () => {
  return (
    <footer className=" flex items-center justify-center pb-14 pt-20 bg-[gray] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col rounded-xl">
        <div className=" flex flex-col items-start justify-center gap-[10%] md:flex-row p-8 bg-[lightgray] rounded-t-xl">
          <div className="flex flex-wrap gap-8 sm:justify-button md:flex md:flex-1">
            {FOOTER.map((col) => (
              <FooterColumn key={col.title} title={col.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  {col.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_TWO.title}>
                {FOOTER_CONTACT_TWO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p>{link.label}:</p>
                    <p className="medium-14">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((link) => (
                    <Link href={"/"} key={link}>
                      <Image src={link} alt="logo" height={22} width={22} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <p className="regular-14 bg-secondary text-white py-2 px-8 rounded-b-xl  flex justify-between">
          <span>2024 Passport</span>
          <span>All right reserved</span>
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold whitespace-nowrap text-[20px]">{title}</h4>
      {children}
    </div>
  );
};
export default Footer;
