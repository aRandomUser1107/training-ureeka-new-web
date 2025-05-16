"use client";
import React from "react";
import {
  Navbar,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "About", link: "/about" },
  { name: "Experience", link: "/experience" },
  { name: "Resume", link: "/resume" },
  { name: "Contact", link: "/contact" },
];

export default function Home() {
  return (
    <>
      <Navbar>
        <NavBody>
          <NavItems items={navItems} />
        </NavBody>
      </Navbar>
      <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="mt-12 text-4xl font-bold text-center">
          Welcome to <span className="text-blue-500">Sesi 2</span>
        </h1>
        <p className="text-center">this is a multipage portofolio</p>
      </div>
    </>
  );
}
