"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Link from "next/link";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    const heroSpilt = new SplitText(".title", {
      type: "chars,words",
    });
    const paraghraphSpilt = new SplitText(".subtitle", {
      type: "lines",
    });
    heroSpilt.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSpilt.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(paraghraphSpilt.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1, //animate after a second from the first aniamtion
    });
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <Link href="#cocktails">View cocktails</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
