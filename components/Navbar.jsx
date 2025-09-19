"use client";
import { navLinks } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  //when nav bottom switch top viewport the navbar will have a background color so it will appear when i scroll throught the page
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  return (
    <nav>
      <div>
        <Link href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
