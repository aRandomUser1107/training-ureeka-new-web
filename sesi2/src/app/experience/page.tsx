"use client";
import React from "react";
import {
  Navbar,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "About", link: "/about" },
  { name: "Resume", link: "/resume" },
  { name: "Contact", link: "/contact" },
];

export default function about(){
    return(
        <>
        <Navbar>
            <NavBody>
                <NavItems items={navItems} />
            </NavBody>
        </Navbar>
        
        <div className="flex flex-col items-center p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="mt-12 text-4xl font-bold text-center">
          This is <span className="text-blue-500">My Experience</span>
        </h1>
        <p className="text-center">none</p>
      </div>
      </>
    )
    
}